const DEFAULT_PORT = 3000;
const DEFAULT_RATE_LIMIT_MAX_REQUESTS = 50;
const DEFAULT_RATE_LIMIT_WINDOW_MS = 60 * 1000;
const DEFAULT_RATE_LIMIT_BLOCK_MS = 5 * 60 * 1000;

function parseInteger(value, fallbackValue) {
  const parsedValue = Number.parseInt(value, 10);

  if (Number.isNaN(parsedValue)) {
    return fallbackValue;
  }

  return parsedValue;
}

function parseBoolean(value, fallbackValue = false) {
  if (typeof value !== "string") {
    return fallbackValue;
  }

  const normalizedValue = value.trim().toLowerCase();

  if (["1", "true", "yes", "on"].includes(normalizedValue)) {
    return true;
  }

  if (["0", "false", "no", "off"].includes(normalizedValue)) {
    return false;
  }

  return fallbackValue;
}

function getPort() {
  return parseInteger(process.env.PORT || `${DEFAULT_PORT}`, DEFAULT_PORT);
}

function getSecurityConfig() {
  return {
    trustProxy: parseBoolean(process.env.TRUST_PROXY, false),
    requireCloudflareProxy: parseBoolean(process.env.REQUIRE_CLOUDFLARE_PROXY, false),
    rateLimitMaxRequests: parseInteger(
      process.env.RATE_LIMIT_MAX_REQUESTS,
      DEFAULT_RATE_LIMIT_MAX_REQUESTS
    ),
    rateLimitWindowMs: parseInteger(process.env.RATE_LIMIT_WINDOW_MS, DEFAULT_RATE_LIMIT_WINDOW_MS),
    rateLimitBlockMs: parseInteger(process.env.RATE_LIMIT_BLOCK_MS, DEFAULT_RATE_LIMIT_BLOCK_MS),
  };
}

module.exports = {
  getPort,
  getSecurityConfig,
};
