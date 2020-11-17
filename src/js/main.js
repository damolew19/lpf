import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import handleMobileNavigation from "./userInteractions";
import "regenerator-runtime/runtime.js";

import importImages from './importImages';

importImages();


if (document.getElementById("root") !== null) {
	ReactDOM.render(<App />, document.getElementById("root"));
}


(function hamburgerObserver() {
	function callback(entries) {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				document.querySelector('.header__fixed').style.zIndex = 99;
				document.querySelector('.header__button').classList.remove('header__button--hide');
			
			} else {
				document.querySelector('.header__button').classList.add('header__button--hide');
				setTimeout(() => document.querySelector('.header__fixed').style.zIndex = -1, 200);
			}
		});
	}
	
	const options = {
		rootMargin: '75px 0px 0px 0px',
	};
	const observer = new IntersectionObserver(callback, options);
	observer.observe(document.querySelector('.header'));
})();



document.querySelector(".header__button").addEventListener("click", handleMobileNavigation);

	

