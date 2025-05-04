// Theme toggle functionality
function initThemeToggle() {
	const themeToggle = document.getElementById("theme-toggle");

	if (themeToggle && !themeToggle.hasAttribute("data-initialized")) {
		// Mark as initialized to avoid duplicate event listeners
		themeToggle.setAttribute("data-initialized", "true");

		// Check for saved theme preference or use system preference
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme === "dark") {
			document.documentElement.classList.add("dark-mode");
		} else if (savedTheme === "light") {
			document.documentElement.classList.add("light-mode");
		}

		themeToggle.addEventListener("click", () => {
			const isDark =
				document.documentElement.classList.contains("dark-mode") ||
				(!document.documentElement.classList.contains("light-mode") &&
					window.matchMedia("(prefers-color-scheme: dark)").matches);

			if (isDark) {
				document.documentElement.classList.remove("dark-mode");
				document.documentElement.classList.add("light-mode");
				localStorage.setItem("theme", "light");
			} else {
				document.documentElement.classList.remove("light-mode");
				document.documentElement.classList.add("dark-mode");
				localStorage.setItem("theme", "dark");
			}
		});
	}
}

// Run on page load
document.addEventListener("DOMContentLoaded", initThemeToggle);

// Also run immediately in case DOMContentLoaded already fired
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", initThemeToggle);
} else {
	initThemeToggle();
}
