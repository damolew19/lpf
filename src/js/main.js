import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import handleMobileNavigation from "./userInteractions";
import "regenerator-runtime/runtime.js";

import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import importImages from './importImages';

importImages();

// gsap.registerPlugin(ScrollTrigger);

// gsap.to("#scrollImgOne", {
// 	scrollTrigger: {
// 		scrub: 2,
// 		start: "50 90%",
// 		end: "bottom center"
// 	},
// 	y: -300,
// 	duration: 3,
// 	ease: "none"
// });

// gsap.to("#scrollImgTwo", {
// 	scrollTrigger: {
// 		scrub: 1,
// 		start: "50 80%",
// 		end: "bottom center"
// 	},
// 	y: -100,
// 	duration: 2,
// 	ease: "none"
// });


if (document.getElementById("root") !== null) {
	ReactDOM.render(<App />, document.getElementById("root"));
}


(function hamburgerObserver() {
	function callback(entries) {
		entries.forEach((entry) => {
			console.log(entry);
			if (!entry.isIntersecting) {
				console.log('ok');
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

	

