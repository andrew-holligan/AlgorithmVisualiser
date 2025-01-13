import { embedSvg } from "./svg.js";

async function closeDropdown(dropdown) {
	const button = dropdown.querySelector(".navbar-dropdown-button");
	const menu = dropdown.querySelector(".navbar-dropdown-menu");
	const icon = button.querySelector(".icon");

	button.classList.remove("navbar-dropdown-button-active");
	menu.classList.remove("navbar-dropdown-menu-active");
	icon.dataset.embedSvg = "chevron-down.svg";
	await embedSvg(icon);
}

async function openDropdown(dropdown) {
	const button = dropdown.querySelector(".navbar-dropdown-button");
	const menu = dropdown.querySelector(".navbar-dropdown-menu");
	const icon = button.querySelector(".icon");

	button.classList.add("navbar-dropdown-button-active");
	menu.classList.add("navbar-dropdown-menu-active");
	icon.dataset.embedSvg = "chevron-up.svg";
	await embedSvg(icon);
}

async function closeDropdowns(dropdowns) {
	for (let i = 0; i < dropdowns.length; i++) {
		await closeDropdown(dropdowns[i]);
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const navbarDropdowns = document.getElementsByClassName("navbar-dropdown");

	for (let i = 0; i < navbarDropdowns.length; i++) {
		const button = navbarDropdowns[i].querySelector(
			".navbar-dropdown-button"
		);

		button.addEventListener("click", async () => {
			if (button.classList.contains("navbar-dropdown-button-active")) {
				await closeDropdown(navbarDropdowns[i]);
			} else {
				await closeDropdowns(navbarDropdowns);
				await openDropdown(navbarDropdowns[i]);
			}
		});
	}
});
