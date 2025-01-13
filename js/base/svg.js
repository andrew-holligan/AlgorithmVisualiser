/**
 * embed svg's inline
 */
document.querySelectorAll("[data-embed-svg]").forEach((element) => {
	const svgName = element.dataset.embedSvg;

	fetch(`./assets/icons/${svgName}`)
		.then((response) => response.text())
		.then((svg) => {
			element.innerHTML = svg;
		})
		.catch((error) => {
			console.error(`Error fetching ${svgName}: ${error}`);
			element.innerHTML = "<p>?</p>";
		});
});
