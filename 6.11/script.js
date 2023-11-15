document.addEventListener("DOMContentLoaded", function() {
    const generalInfoForm = document.querySelector(".general-info form");
    const contactDetailsForm = document.querySelector(".contact-details form");
    const nextButton = document.querySelector(".next-button");
    const prevButton = document.querySelector(".prev-button");

    nextButton.addEventListener("click", function() {
        generalInfoForm.style.display = "none";
        contactDetailsForm.style.display = "block";
    });

    prevButton.addEventListener("click", function() {
        contactDetailsForm.style.display = "none";
        generalInfoForm.style.display = "block";
    });
});
