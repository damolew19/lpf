function handleMobileNavigation() {
	console.log("her");
	const header = document.querySelector(".header__fixed-navigation");
	const button = document.querySelector('.header__button');
	button.classList.add('header__button--hide');	
	header.classList.remove('header__fixed-navigation--hide');

		window.onscroll = () => {
		if (header.classList.contains("header__fixed-navigation--hide") !== true) {
			header.classList.add('header__fixed-navigation--hide');
			button.classList.remove('header__button--hide');
		}
	};
	
}

export default handleMobileNavigation;