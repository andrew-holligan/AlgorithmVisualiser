import { embedSvg } from "./svg.js";

const themes = {
	light: {
		icon: "moon.svg",
	},
	dark: {
		icon: "sun.svg",
	},
};

async function setTheme(theme) {
	localStorage.setItem("theme", theme);

	const root = document.documentElement;
	root.classList.remove("light", "dark");
	root.classList.add(theme);

	const themeButton = document.getElementById("theme-button");
	themeButton.onclick =
		theme === "light"
			? async () => setTheme("dark")
			: async () => setTheme("light");
	themeButton.dataset.embedSvg = themes[theme].icon;
	await embedSvg(themeButton);
}

document.addEventListener("DOMContentLoaded", async () => {
	const theme = localStorage.getItem("theme") || "light";

	await setTheme(theme);
});
