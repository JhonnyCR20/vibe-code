const { buildPageContent } = require("../data/siteContent");

function renderHome(req, res) {
  res.render("pages/home", {
    page: buildPageContent("home"),
  });
}

function renderServices(req, res) {
  res.render("pages/services", {
    page: buildPageContent("services"),
  });
}

function renderProcess(req, res) {
  res.render("pages/process", {
    page: buildPageContent("process"),
  });
}

function renderGallery(req, res) {
  res.render("pages/gallery", {
    page: buildPageContent("gallery"),
  });
}

function renderTestimonials(req, res) {
  res.render("pages/testimonials", {
    page: buildPageContent("testimonials"),
  });
}

function renderFaq(req, res) {
  res.render("pages/faq", {
    page: buildPageContent("faq"),
  });
}

function renderContact(req, res) {
  res.render("pages/contact", {
    page: buildPageContent("contact"),
  });
}

module.exports = {
  renderHome,
  renderServices,
  renderProcess,
  renderGallery,
  renderTestimonials,
  renderFaq,
  renderContact,
};
