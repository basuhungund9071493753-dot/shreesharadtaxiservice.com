// ==========================================
// SHREE SHARADA TAXI SERVICE
// Main JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

  // ------------------------------------------
  // MOBILE MENU
  // ------------------------------------------

  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });

    // Close menu after clicking a navigation link
    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");
      });
    });
  }


  // ------------------------------------------
  // SMOOTH SCROLL
  // ------------------------------------------

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

      const targetId = this.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    });

  });


  // ------------------------------------------
  // HEADER SCROLL EFFECT
  // ------------------------------------------

  const header = document.querySelector("header");

  if (header) {

    window.addEventListener("scroll", () => {

      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }

    });

  }


  // ------------------------------------------
  // WHATSAPP BOOKING
  // ------------------------------------------

  const whatsappNumber = "916362177207";

  function openWhatsApp(message) {

    const url =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(message);

    window.open(url, "_blank");

  }


  // ------------------------------------------
  // WHATSAPP BUTTONS
  // ------------------------------------------

  document.querySelectorAll(".whatsapp-btn, .book-whatsapp").forEach(button => {

    button.addEventListener("click", event => {

      event.preventDefault();

      const message =
        "Hello Shree Sharada Taxi Service,%0A%0A" +
        "I would like to book a taxi.%0A" +
        "Please share the availability and fare.";

      openWhatsApp(
        "Hello Shree Sharada Taxi Service,\n\n" +
        "I would like to book a taxi.\n" +
        "Please share the availability and fare."
      );

    });

  });


  // ------------------------------------------
  // CALL BUTTON
  // ------------------------------------------

  document.querySelectorAll(".call-btn").forEach(button => {

    button.addEventListener("click", event => {

      event.preventDefault();

      window.location.href = "tel:+916362177207";

    });

  });


  // ------------------------------------------
  // BOOKING FORM
  // ------------------------------------------

  const bookingForm = document.querySelector("#bookingForm");

  if (bookingForm) {

    bookingForm.addEventListener("submit", event => {

      event.preventDefault();

      const name =
        document.querySelector("#name")?.value.trim() || "";

      const phone =
        document.querySelector("#phone")?.value.trim() || "";

      const pickup =
        document.querySelector("#pickup")?.value.trim() || "";

      const destination =
        document.querySelector("#destination")?.value.trim() || "";

      const date =
        document.querySelector("#date")?.value || "";

      const time =
        document.querySelector("#time")?.value || "";

      const vehicle =
        document.querySelector("#vehicle")?.value || "";

      const passengers =
        document.querySelector("#passengers")?.value || "";

      if (!name || !phone || !pickup || !destination) {

        alert(
          "Please fill in your name, phone number, pickup location and destination."
        );

        return;

      }

      const message =
        "🚕 SHREE SHARADA TAXI SERVICE - BOOKING REQUEST\n\n" +
        "👤 Name: " + name + "\n" +
        "📞 Phone: " + phone + "\n" +
        "📍 Pickup: " + pickup + "\n" +
        "🏁 Destination: " + destination + "\n" +
        "📅 Date: " + date + "\n" +
        "⏰ Time: " + time + "\n" +
        "🚘 Vehicle: " + vehicle + "\n" +
        "👥 Passengers: " + passengers + "\n\n" +
        "Please confirm availability and fare.";

      openWhatsApp(message);

    });

  }


  // ------------------------------------------
  // VEHICLE CARD BOOKING
  // ------------------------------------------

  document.querySelectorAll(".vehicle-book").forEach(button => {

    button.addEventListener("click", event => {

      event.preventDefault();

      const card = button.closest(".vehicle-card");

      let vehicleName = "Taxi";

      if (card) {

        const title =
          card.querySelector("h3, h2, .vehicle-name");

        if (title) {
          vehicleName = title.textContent.trim();
        }

      }

      const message =
        "Hello Shree Sharada Taxi Service,\n\n" +
        "I would like to book the following vehicle:\n\n" +
        "🚘 Vehicle: " + vehicleName + "\n\n" +
        "Please share the fare and availability.";

      openWhatsApp(message);

    });

  });


  // ------------------------------------------
  // ROUTE CARD BOOKING
  // ------------------------------------------

  document.querySelectorAll(".route-book").forEach(button => {

    button.addEventListener("click", event => {

      event.preventDefault();

      const card = button.closest(".route-card");

      let routeName = "Taxi Route";

      if (card) {

        const title =
          card.querySelector("h3, h2, .route-name");

        if (title) {
          routeName = title.textContent.trim();
        }

      }

      const message =
        "Hello Shree Sharada Taxi Service,\n\n" +
        "I would like to enquire about:\n\n" +
        "📍 " + routeName + "\n\n" +
        "Please share the taxi fare and availability.";

      openWhatsApp(message);

    });

  });


  // ------------------------------------------
  // CURRENT YEAR
  // ------------------------------------------

  document.querySelectorAll(".current-year").forEach(element => {

    element.textContent = new Date().getFullYear();

  });


  // ------------------------------------------
  // SCROLL TO TOP BUTTON
  // ------------------------------------------

  const scrollTopButton =
    document.querySelector("#scrollTop");

  if (scrollTopButton) {

    window.addEventListener("scroll", () => {

      if (window.scrollY > 400) {
        scrollTopButton.classList.add("show");
      } else {
        scrollTopButton.classList.remove("show");
      }

    });

    scrollTopButton.addEventListener("click", () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  }


  // ------------------------------------------
  // REVEAL ANIMATION
  // ------------------------------------------

  const revealElements =
    document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.classList.add("visible");

              observer.unobserve(entry.target);

            }

          });

        },
        {
          threshold: 0.12
        }
      );

    revealElements.forEach(element => {
      observer.observe(element);
    });

  } else {

    revealElements.forEach(element => {
      element.classList.add("visible");
    });

  }


  // ------------------------------------------
  // DISABLE EMPTY LINKS
  // ------------------------------------------

  document.querySelectorAll('a[href="#"]').forEach(link => {

    link.addEventListener("click", event => {
      event.preventDefault();
    });

  });


  console.log(
    "Shree Sharada Taxi Service website loaded successfully."
  );

});