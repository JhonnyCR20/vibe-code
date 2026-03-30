const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuButton && siteNav) {
  const navLinks = siteNav.querySelectorAll("a");

  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", `${!expanded}`);
    siteNav.classList.toggle("is-open", !expanded);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    });
  });
}

const sections = document.querySelectorAll(".section-reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  sections.forEach((section) => observer.observe(section));
} else {
  sections.forEach((section) => section.classList.add("is-visible"));
}

const THEME_STORAGE_KEY = "luxdrive-theme";
const themeToggleButton = document.querySelector("[data-theme-toggle]");
const themeToggleLabel = document.querySelector("[data-theme-toggle-label]");
const systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

function readStoredTheme() {
  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }
  } catch (error) {
    return null;
  }

  return null;
}

function writeStoredTheme(theme) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    // Ignore storage restrictions and keep in-memory behavior only.
  }
}

function clearStoredTheme() {
  try {
    window.localStorage.removeItem(THEME_STORAGE_KEY);
  } catch (error) {
    // Ignore storage restrictions and keep in-memory behavior only.
  }
}

function getSystemTheme() {
  return systemThemeQuery.matches ? "dark" : "light";
}

function applyTheme(theme, mode) {
  document.documentElement.setAttribute("data-theme", theme);

  if (!themeToggleButton || !themeToggleLabel) {
    return;
  }

  const isDark = theme === "dark";
  themeToggleButton.classList.toggle("is-dark", isDark);
  themeToggleButton.setAttribute("aria-checked", `${isDark}`);
  themeToggleLabel.textContent = `Tema ${mode}: ${isDark ? "oscuro" : "claro"}`;
}

const initialStoredTheme = readStoredTheme();
const initialTheme = initialStoredTheme || getSystemTheme();
applyTheme(initialTheme, initialStoredTheme ? "manual" : "auto");

if (themeToggleButton) {
  themeToggleButton.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    writeStoredTheme(nextTheme);
    applyTheme(nextTheme, "manual");
  });

  // Double click returns to automatic mode based on browser/system preference.
  themeToggleButton.addEventListener("dblclick", () => {
    clearStoredTheme();
    applyTheme(getSystemTheme(), "auto");
  });
}

systemThemeQuery.addEventListener("change", () => {
  if (!readStoredTheme()) {
    applyTheme(getSystemTheme(), "auto");
  }
});

function formatCrc(value) {
  return new Intl.NumberFormat("es-CR", {
    style: "currency",
    currency: "CRC",
    maximumFractionDigits: 0,
  }).format(value);
}

const serviceCards = document.querySelectorAll("[data-service-card]");

serviceCards.forEach((card) => {
  const basePrice = Number(card.dataset.basePrice || 0);
  const vehicleSelect = card.querySelector("[data-card-vehicle]");
  const livePrice = card.querySelector("[data-card-price]");
  const baseLabel = livePrice?.dataset.baseLabel || "";

  if (!vehicleSelect || !livePrice || !basePrice) {
    return;
  }

  const updateCardPrice = () => {
    const selectedVehicle = vehicleSelect.selectedOptions[0];
    const multiplier = Number(selectedVehicle?.dataset.multiplier || 0);

    if (!vehicleSelect.value || !multiplier) {
      livePrice.textContent = baseLabel;
      return;
    }

    const estimatedPrice = Math.round((basePrice * multiplier) / 500) * 500;
    livePrice.textContent = `Estimado ${formatCrc(estimatedPrice)}`;
  };

  vehicleSelect.addEventListener("change", updateCardPrice);
  updateCardPrice();
});
