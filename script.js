// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");

// Check for saved preference in localStorage
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.querySelector("i").classList.remove("fa-moon");
    darkModeToggle.querySelector("i").classList.add("fa-sun");
}

darkModeToggle.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark-mode");

    // Save preference in localStorage
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");

    // Update the icon in the toggle button
    const icon = darkModeToggle.querySelector("i");
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        // Scroll to the target section smoothly
        const targetSection = document.querySelector(this.getAttribute("href"));
        targetSection.scrollIntoView({
            behavior: "smooth",
        });

        // Set focus to the target section for better accessibility
        setTimeout(() => {
            targetSection.setAttribute("tabindex", "-1");
            targetSection.focus({ preventScroll: true });
        }, 500); // Delay to match the scrolling animation
    });
});
