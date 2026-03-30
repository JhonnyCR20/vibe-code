const express = require("express");
const helmet = require("helmet");
const path = require("path");

const { getSecurityConfig } = require("./config/env");
const { buildPageContent } = require("./data/siteContent");
const {
  requireCloudflareProxy,
  applyTemporaryIpBlock,
} = require("./middlewares/securityMiddleware");
const homeRouter = require("./routes/homeRouter");

const app = express();
const securityConfig = getSecurityConfig();

if (securityConfig.trustProxy) {
  app.set("trust proxy", 1);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        imgSrc: ["'self'", "data:", "https://images.unsplash.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        connectSrc: ["'self'"],
        objectSrc: ["'none'"],
        formAction: ["'self'", "https://docs.google.com"],
        frameAncestors: ["'self'"],
      },
    },
    referrerPolicy: {
      policy: "strict-origin-when-cross-origin",
    },
  })
);

app.use(requireCloudflareProxy);
app.use(applyTemporaryIpBlock);

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/", homeRouter);

app.use((req, res) => {
  const basePage = buildPageContent("home");

  res.status(404).render("pages/notFound", {
    page: {
      ...basePage,
      currentPath: req.path,
      meta: {
        title: "Pagina no encontrada | LuxDrive Detailing",
        description: "La ruta solicitada no existe.",
      },
    },
  });
});

module.exports = app;
