'use strict';

// Element toggle function
const elementToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
}

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Theme variables
const themeBtn = document.querySelector(".theme-btn");

// Navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Initialize AOS
AOS.init({
  duration: 800,
  offset: 100,
  once: true
});

// Sidebar toggle for mobile
sidebarBtn?.addEventListener("click", function () { 
  elementToggleFunc(sidebar); 
});

// Theme toggle
themeBtn?.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  
  // Update theme icon
  const themeIcon = this.querySelector("ion-icon");
  if (document.body.classList.contains("dark-mode")) {
    themeIcon.setAttribute("name", "sunny-outline");
  } else {
    themeIcon.setAttribute("name", "moon-outline");
  }
});

// Navigation
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
const form = document.querySelector(".contact-form");
form?.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  
  try {
    // Add your form submission logic here
    console.log("Form data:", data);
    
    // Reset form after successful submission
    form.reset();
    alert("Message sent successfully!");
  } catch (error) {
    console.error("Error sending message:", error);
    alert("Error sending message. Please try again.");
  }
});

// Portfolio filter functionality (if needed)
const filterButtons = document.querySelectorAll("[data-filter-btn]");
const projectCards = document.querySelectorAll(".project-card");

filterButtons?.forEach(button => {
  button.addEventListener("click", () => {
    const filterValue = button.getAttribute("data-filter");
    
    projectCards.forEach(card => {
      if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
    
    // Update active filter button
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

// Save theme preference
const saveThemePreference = () => {
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Load theme preference
const loadThemePreference = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeBtn.querySelector("ion-icon").setAttribute("name", "sunny-outline");
  }
}

// Initialize theme
loadThemePreference();
themeBtn?.addEventListener("click", saveThemePreference);