/**
 * navbar dropdown menu
 */
document.querySelectorAll(".navbar-dropdown").forEach((element) => {
	const button = element.querySelector(".navbar-dropdown-button");
	const menu = element.querySelector(".navbar-dropdown-menu");

	button.addEventListener("click", () => {
		button.classList.toggle("navbar-dropdown-button-active");
		menu.classList.toggle("navbar-dropdown-menu-active");
	});
});
