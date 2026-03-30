const express = require("express");

const homeController = require("../controllers/homeController");

const router = express.Router();

router.get("/", homeController.renderHome);
router.get("/servicios", homeController.renderServices);
router.get("/proceso", homeController.renderProcess);
router.get("/galeria", homeController.renderGallery);
router.get("/testimonios", homeController.renderTestimonials);
router.get("/faq", homeController.renderFaq);
router.get("/contacto", homeController.renderContact);

module.exports = router;
