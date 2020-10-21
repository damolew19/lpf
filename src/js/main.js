import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import handleMobileNavigation from "./userInteractions";
import "regenerator-runtime/runtime.js";

import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to("#scrollImgOne", {
	scrollTrigger: {
		scrub: 2,
		start: "50 90%",
		end: "bottom center"
	},
	y: -300,
	duration: 3,
	ease: "none"
});

gsap.to("#scrollImgTwo", {
	scrollTrigger: {
		scrub: 1,
		start: "50 80%",
		end: "bottom center"
	},
	y: -100,
	duration: 2,
	ease: "none"
});






if (document.getElementById("root") !== null) {
	ReactDOM.render(<App />, document.getElementById("root"));
}




document.querySelector(".header__button").addEventListener("click", handleMobileNavigation);

	