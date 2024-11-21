'use strict';

// Element toggle function
const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
}

// Variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
const themeBtn = document.querySelector(".theme-btn");
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Initialize AOS
AOS.init({
    duration: 800,
    offset: 100,
    once: true
});

// Sidebar toggle functionality
sidebarBtn?.addEventListener("click", function () {
    elementToggleFunc(sidebar);
});

// Theme toggle functionality
themeBtn?.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        themeBtn.querySelector("ion-icon").setAttribute("name", "sunny-outline");
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.querySelector("ion-icon").setAttribute("name", "moon-outline");
        localStorage.setItem("theme", "light");
    }
});

// Load saved theme
const loadTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeBtn.querySelector("ion-icon").setAttribute("name", "sunny-outline");
    }
};

// Navigation functionality
for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
        for (let i = 0; i < pages.length; i++) {
            if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
                pages[i].classList.add("active");
                navigationLinks[i].classList.add("active");
                window.scrollTo(0, 0);
            } else {
                pages[i].classList.remove("active");
                navigationLinks[i].classList.remove("active");
            }
        }
    });
}

// Contact form handling
const contactForm = document.querySelector(".contact-form");
contactForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    try {
        // Add your form submission logic here
        console.log("Form data:", data);
        
        // Reset form after successful submission
        contactForm.reset();
        alert("Message sent successfully!");
    } catch (error) {
        console.error("Error sending message:", error);
        alert("Error sending message. Please try again.");
    }
});

// Skills progress animation
const animateSkills = () => {
    const skillItems = document.querySelectorAll(".skills-item");
    skillItems.forEach(item => {
        const progress = item.querySelector(".skill-progress-fill");
        const percentage = item.querySelector("data").value;
        progress.style.width = `${percentage}%`;
    });
};

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    loadTheme();
    animateSkills();
});