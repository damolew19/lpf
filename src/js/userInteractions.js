function handleMobileNavigation() {
	console.log("her");
	const header = document.querySelector(".header");
	if (header.style.maxHeight === "10rem") {
		header.style.maxHeight = "4rem";
	} else {
		header.style.maxHeight = "10rem";
	}
}

export default handleMobileNavigation;