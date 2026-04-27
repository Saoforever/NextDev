document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("darkModeToggle");

  if (!toggleBtn) {
    console.error("Dark mode button not found");
    return;
  }

  // Load saved mode
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });
});