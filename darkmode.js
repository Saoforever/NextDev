document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("darkModeToggle");
    // 1. Find the hint element
    const hint = document.getElementById("hintPopup");

    if (!toggleBtn) {
        console.error("Dark mode button not found");
        return;
    }

    // Load saved mode
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        // 2. If dark mode is already enabled, hide the hint immediately
        if (hint) hint.style.display = "none";
    }

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        
        // 3. Hide the hint as soon as they click
        if (hint) hint.style.display = "none";

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
});
