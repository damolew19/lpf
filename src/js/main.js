
import handleMobileNavigation from "./userInteractions";
// eslint-disable-next-line no-unused-vars
import ServicesSection from "./ServicesSection";
import ReactDOM from "react-dom";
import React from "react";

// eslint-disable-next-line no-unused-vars
const App = () => {
  return (
    <ServicesSection />
    );
};



ReactDOM.render(React.createElement(<App />), document.getElementById("root"));

document.querySelector(".header__button").addEventListener("click", handleMobileNavigation);

