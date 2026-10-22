
/* =========================================
   SHREE SHARADA TAXI SERVICE
   Website JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // 1. MOBILE NAVIGATION
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      const isOpen = mainNav.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );

      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close the mobile menu after choosing a page.
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
        menuToggle.textContent = "☰";
      });
    });

    // Close the menu when clicking outside it.
    document.addEventListener("click", function (event) {
      if (
        !mainNav.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
        menuToggle.textContent = "☰";
      }
    });

    // Restore the normal navigation state on desktop.
    window.addEventListener("resize", function () {
      if (window.innerWidth > 850) {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
        menuToggle.textContent = "☰";
      }
    });
  }

  // 2. AUTOMATIC COPYRIGHT YEAR
  document.querySelectorAll("[data-year]").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });

  // 3. HIGHLIGHT THE CURRENT NAVIGATION PAGE
  const currentPage = (
    window.location.pathname.split("/").pop() || "index.html"
  ).toLowerCase();

  document.querySelectorAll(".main-nav a[href]").forEach(function (link) {
    const linkUrl = new URL(link.href, window.location.href);
    const linkPage = linkUrl.pathname.split("/").pop().toLowerCase();

    if (linkPage === currentPage && !link.hash) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    }
  });

  // 4. HANDLE IMAGES THAT FAIL TO LOAD
  document.querySelectorAll("img").forEach(function (img) {
    img.addEventListener("error", function () {
      img.classList.add("image-unavailable");
      img.setAttribute("data-image-error", "true");

      // Do not keep retrying a broken image.
      img.onerror = null;

      console.warn("Image failed to load:", img.currentSrc || img.src);
    });
  });

  // 5. WHATSAPP CONTACT FORM
  // If a contact form has id="contactForm", gather its details
  // and open WhatsApp with a prefilled enquiry.
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!contactForm.reportValidity()) {
        return;
      }

      const formData = new FormData(contactForm);

      const name = String(formData.get("name") || "").trim();
      const phone = String(formData.get("phone") || "").trim();
      const service = String(formData.get("service") || "").trim();
      const pickup = String(formData.get("pickup") || "").trim();
      const destination = String(formData.get("destination") || "").trim();
      const travelDate = String(formData.get("date") || "").trim();
      const passengers = String(formData.get("passengers") || "").trim();
      const message = String(formData.get("message") || "").trim();

      const enquiry = [
        "Hello Shree Sharada Taxi Service,",
        "",
        "I would like a taxi quotation.",
        "Name: " + (name || "Not provided"),
        "Phone: " + (phone || "Not provided"),
        "Service: " + (service || "Not specified"),
        "Pickup: " + (pickup || "Not specified"),
        "Destination: " + (destination || "Not specified"),
        "Travel date: " + (travelDate || "Not specified"),
        "Passengers: " + (passengers || "Not specified"),
        "Additional details: " + (message || "None")
      ].join("\n");

      const whatsappUrl =
        "https://wa.me/916362177207?text=" +
        encodeURIComponent(enquiry);

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
  }

  // 6. SMOOTH SCROLL FOR SAME-PAGE LINKS
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches ? "auto" : "smooth",
          block: "start"
        });

        if (history.replaceState) {
          history.replaceState(null, "", targetId);
        }
      }
    });
  });

});
