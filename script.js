document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });

        navMenu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
            });
        });
    }

    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        const scrollTop = document.getElementById("scrollTop");

        if (header) {
            header.classList.toggle("scrolled", window.scrollY > 30);
        }

        if (scrollTop) {
            scrollTop.style.display = window.scrollY > 400 ? "flex" : "none";
        }
    });

    const scrollTop = document.getElementById("scrollTop");

    if (scrollTop) {
        scrollTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (e) {
            const id = this.getAttribute("href");

            if (id !== "#") {
                const target = document.querySelector(id);

                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    document.querySelectorAll(".current-year").forEach(function (el) {
        el.textContent = new Date().getFullYear();
    });

    const reveals = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.12
    });

    reveals.forEach(function (element) {
        revealObserver.observe(element);
    });

    document.querySelectorAll(".whatsapp-btn, .book-whatsapp").forEach(function (button) {
        button.addEventListener("click", function () {
            const message = this.dataset.message ||
                "Hello Shree Sharada Taxi Service, I would like to enquire about taxi service.";

            const url =
                "https://wa.me/916362177207?text=" +
                encodeURIComponent(message);

            window.open(url, "_blank");
        });
    });

    document.querySelectorAll(".vehicle-book, .route-book").forEach(function (button) {
        button.addEventListener("click", function () {
            const item = this.dataset.item || "taxi service";

            const message =
                "Hello Shree Sharada Taxi Service, I would like to enquire about " +
                item + ".";

            window.open(
                "https://wa.me/916362177207?text=" +
                encodeURIComponent(message),
                "_blank"
            );
        });
    });

    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {
        bookingForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name")?.value || "";
            const phone = document.getElementById("phone")?.value || "";
            const pickup = document.getElementById("pickup")?.value || "";
            const destination = document.getElementById("destination")?.value || "";
            const date = document.getElementById("date")?.value || "";
            const message = document.getElementById("message")?.value || "";

            const text =
                "Hello Shree Sharada Taxi Service,%0A%0A" +
                "Name: " + encodeURIComponent(name) + "%0A" +
                "Phone: " + encodeURIComponent(phone) + "%0A" +
                "Pickup: " + encodeURIComponent(pickup) + "%0A" +
                "Destination: " + encodeURIComponent(destination) + "%0A" +
                "Date: " + encodeURIComponent(date) + "%0A" +
                "Message: " + encodeURIComponent(message);

            window.open(
                "https://wa.me/916362177207?text=" + text,
                "_blank"
            );
        });
    }

});
