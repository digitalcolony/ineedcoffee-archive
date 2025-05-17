// Mobile menu toggle functionality
document.addEventListener("DOMContentLoaded", () => {
	const hamburger = document.getElementById("hamburger-menu");
	const navLinks = document.getElementById("nav-links");
	const menuToggle = document.querySelector(".menu-toggle");

	if (hamburger && navLinks && menuToggle) {
		hamburger.addEventListener("click", () => {
			navLinks.classList.toggle("show");
			menuToggle.classList.toggle("active");
		});

		// Close menu when clicking on a link
		const links = navLinks.querySelectorAll("a");
		links.forEach((link) => {
			link.addEventListener("click", () => {
				navLinks.classList.remove("show");
				menuToggle.classList.remove("active");
			});
		});
	}
});
