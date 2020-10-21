import React, { useState } from "react";
import ServicesSection from "./ServicesSection";
import ServicesNavigation from "./ServicesNavigation";


const App = () => {

	const [service, setService] = useState("Photos");
	// const [prints, setPrints] = useState("");
	// const [canvas, setCanvas] = useState("");
	// const [certificates, setCertificates] = useState("");
	// const [memorbilia, setMemorbilia] = useState("");
	// const [embroidery, setEmbroidery] = useState("");

	function handleServiceSelection(e) {
		setService(e.target.id);
	}	




	return (
	<React.Fragment>
		<ServicesNavigation handleServiceSelection={handleServiceSelection}/>
		<div>
			<ServicesSection title={service} />
		</div>
	</React.Fragment>
	);
};

export default App;