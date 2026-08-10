document.addEventListener("DOMContentLoaded", function () {

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll("nav a").forEach(function (link) {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });


    const contactForm = document.querySelector(".contact-form");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            if (formMessage) {
                formMessage.style.display = "block";
                formMessage.textContent =
                    "Thank you! Your message has been submitted.";
            }

            contactForm.reset();
        });
    }

});