// Enhanced dark mode toggle script
document.addEventListener('DOMContentLoaded', function() {
    const mode_toggle = document.getElementById("light-toggle");
    
    // Set initial icon state based on current theme
    updateToggleIcon(localStorage.getItem("theme") || "light");
    
    // Add click event listener
    mode_toggle.addEventListener("click", function() {
        const currentTheme = localStorage.getItem("theme") || "light";
        toggleTheme(currentTheme);
        updateToggleIcon(localStorage.getItem("theme"));
    });
    
    // Function to update the toggle icon based on theme
    function updateToggleIcon(theme) {
        const moonIcon = mode_toggle.querySelector(".fa-moon");
        const sunIcon = mode_toggle.querySelector(".fa-sun");
        
        if (theme === "dark") {
            moonIcon.style.display = "none";
            sunIcon.style.display = "block";
        } else {
            moonIcon.style.display = "block";
            sunIcon.style.display = "none";
        }
    }
});
