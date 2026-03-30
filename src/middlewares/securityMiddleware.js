const { getSecurityConfig } = require("../config/env");

const securityConfig = getSecurityConfig();
const requestWindows = new Map();
const blockedIps = new Map();

function getHeaderValue(headerValue) {
  if (typeof headerValue !== "string") {
    return "";
  }

  return headerValue.trim();
}

function normalizeIpAddress(ipAddress) {
  if (!ipAddress) {
    return "unknown";
  }

  if (ipAddress.startsWith("::ffff:")) {
    return ipAddress.replace("::ffff:", "");
  }

  return ipAddress;
}

function getClientIp(req) {
  if (securityConfig.requireCloudflareProxy) {
    const cloudflareIp = getHeaderValue(req.headers["cf-connecting-ip"]);

    if (cloudflareIp) {
      return normalizeIpAddress(cloudflareIp);
    }
  }

  if (securityConfig.trustProxy) {
    const forwardedFor = getHeaderValue(req.headers["x-forwarded-for"]);

    if (forwardedFor) {
      return normalizeIpAddress(forwardedFor.split(",")[0]);
    }
  }

  return normalizeIpAddress(req.ip || req.socket?.remoteAddress || "unknown");
}

function clearExpiredEntries(currentTime) {
  for (const [ip, blockedUntil] of blockedIps.entries()) {
    if (blockedUntil <= currentTime) {
      blockedIps.delete(ip);
    }
  }

  for (const [ip, windowState] of requestWindows.entries()) {
    if (windowState.windowStartedAt + securityConfig.rateLimitWindowMs <= currentTime) {
      requestWindows.delete(ip);
    }
  }
}

function isLocalRequest(req) {
  const hostHeader = getHeaderValue(req.headers.host).toLowerCase();

  return (
    hostHeader.startsWith("localhost") ||
    hostHeader.startsWith("127.0.0.1") ||
    hostHeader.startsWith("[::1]")
  );
}

function requireCloudflareProxy(req, res, next) {
  if (!securityConfig.requireCloudflareProxy || isLocalRequest(req)) {
    return next();
  }

  const cloudflareRay = getHeaderValue(req.headers["cf-ray"]);
  const cloudflareClientIp = getHeaderValue(req.headers["cf-connecting-ip"]);

  if (!cloudflareRay || !cloudflareClientIp) {
    return res.status(403).json({
      message: "Acceso denegado. Esta aplicacion solo acepta trafico proxied por Cloudflare.",
    });
  }

  return next();
}

function sendRateLimitResponse(res, retryAfterSeconds) {
  res.setHeader("Retry-After", `${retryAfterSeconds}`);

  return res.status(429).json({
    message: "Demasiadas peticiones. Vuelve a intentarlo mas tarde.",
    retryAfterSeconds,
  });
}

function applyTemporaryIpBlock(req, res, next) {
  const currentTime = Date.now();
  clearExpiredEntries(currentTime);

  const clientIp = getClientIp(req);
  const blockedUntil = blockedIps.get(clientIp);

  if (blockedUntil && blockedUntil > currentTime) {
    const retryAfterSeconds = Math.ceil((blockedUntil - currentTime) / 1000);
    return sendRateLimitResponse(res, retryAfterSeconds);
  }

  const activeWindow = requestWindows.get(clientIp);

  if (!activeWindow || activeWindow.windowStartedAt + securityConfig.rateLimitWindowMs <= currentTime) {
    requestWindows.set(clientIp, {
      windowStartedAt: currentTime,
      requestCount: 1,
    });
    return next();
  }

  activeWindow.requestCount += 1;

  if (activeWindow.requestCount > securityConfig.rateLimitMaxRequests) {
    const blockedUntilTime = currentTime + securityConfig.rateLimitBlockMs;
    blockedIps.set(clientIp, blockedUntilTime);
    requestWindows.delete(clientIp);

    const retryAfterSeconds = Math.ceil(securityConfig.rateLimitBlockMs / 1000);
    return sendRateLimitResponse(res, retryAfterSeconds);
  }

  return next();
}

module.exports = {
  requireCloudflareProxy,
  applyTemporaryIpBlock,
};