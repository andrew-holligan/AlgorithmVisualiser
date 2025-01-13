export async function embedSvg(element) {
	const svgName = element.dataset.embedSvg;

	try {
		const res = await fetch(`./assets/icons/${svgName}`);
		const svg = await res.text();
		element.innerHTML = svg;
	} catch (error) {
		console.error(`Error fetching ${svgName}: ${error}`);
		element.innerHTML = "<p>?</p>";
	}
}

document.addEventListener("DOMContentLoaded", async () => {
	const svgElements = document.querySelectorAll("[data-embed-svg]");

	for (let i = 0; i < svgElements.length; i++) {
		await embedSvg(svgElements[i]);
	}
});
