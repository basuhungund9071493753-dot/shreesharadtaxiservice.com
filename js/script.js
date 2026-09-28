/* =========================================================
   SHREE SHARADA TAXI SERVICE
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            const isOpen = mainNav.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        document.addEventListener("click", function (event) {

            if (
                !mainNav.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                mainNav.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });


        const navLinks = mainNav.querySelectorAll(
            "a:not(.nav-call)"
        );

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mainNav.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =====================================================
       MOBILE DROPDOWNS
    ===================================================== */

    const dropdowns = document.querySelectorAll(".nav-dropdown");

    dropdowns.forEach(function (dropdown) {

        const button = dropdown.querySelector(".dropdown-toggle");

        if (!button) return;

        button.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            dropdowns.forEach(function (otherDropdown) {

                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove("open");
                }

            });

            dropdown.classList.toggle("open");

        });

    });


    /* =====================================================
       STICKY HEADER
    ===================================================== */

    const header = document.getElementById("siteHeader");

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 30) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );

    updateHeader();


    /* =====================================================
       FAQ ACCORDION
    ===================================================== */

    const faqQuestions = document.querySelectorAll(
        ".faq-question"
    );

    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const item = question.closest(".faq-item");

            if (!item) return;

            const answer = item.querySelector(".faq-answer");

            const isOpen = item.classList.contains("open");


            document
                .querySelectorAll(".faq-item.open")
                .forEach(function (openItem) {

                    if (openItem !== item) {

                        openItem.classList.remove("open");

                        const openAnswer =
                            openItem.querySelector(".faq-answer");

                        if (openAnswer) {
                            openAnswer.style.maxHeight = null;
                        }

                    }

                });


            if (isOpen) {

                item.classList.remove("open");

                answer.style.maxHeight = null;

            } else {

                item.classList.add("open");

                answer.style.maxHeight =
                    answer.scrollHeight + "px";

            }

        });

    });


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const currentYear =
        document.getElementById("currentYear");

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       CLOSE DROPDOWN WHEN CLICKING OUTSIDE
    ===================================================== */

    document.addEventListener("click", function (event) {

        dropdowns.forEach(function (dropdown) {

            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove("open");
            }

        });

    });


    /* =====================================================
       SMOOTH INTERNAL LINKS
    ===================================================== */

    const hashLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    hashLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

});
