import React, { useState, useEffect } from "react";
import ServicesSection from "./ServicesSection";
import ServicesNavigation from "./ServicesNavigation";
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';


const App = () => {

  const serviceText = {
    Photos: "Frame the most important moments of your life.",
    Prints: "No matter how big or small, your prints will lay perflectly flat inside our frames.",
    Canvas: "From strecthed, mounted, frameless, or framed, we can frame canvas's anyway you like it",
    Memorabilia: "Jerseys, vinyls, jumpers, shoes and more!",
    'Shadow Frame': "We create box frames for any 3d object."
  };

	const [service, setService] = useState("Photos");
	const [images, setImages] = useState(["./IMG_8030.JPEG", "./IMG_8061.JPEG", "./IMG_9934.JPEG", "./lee_pi_076.JPG", "./lee_pi_078.JPG", "./lee_pi_313.JPG"]);
  const [text, setText] = useState("Frame the most important moments of your life.");

	function handleServiceSelection(e) {
		if (e.target.id.length !== 0) {
			setService(e.target.id);
      setText(serviceText[e.target.id]);
		}
	}	

	const cache = {};

	function importAll (r) {
		r.keys().forEach(key => cache[key] = r(key));
		return cache;
	}	



  useEffect(() => {
  let imgObj;

    //import the correct photos on user interaction
    if (service === 'Photos') {
      imgObj = importAll(require.context(`../images/photos`, false, /\.(png|jpe?g|JPG|JPEG|svg)$/));
    } else if (service === 'Prints') {
      imgObj = importAll(require.context(`../images/prints`, false, /\.(png|jpe?g|JPG|JPEG|svg)$/));
    } else if (service === 'Canvas') {
      imgObj = importAll(require.context(`../images/canvas`, false, /\.(png|jpe?g|JPG|JPEG|svg)$/));
    } else if (service === 'Memorabilia') {
      imgObj = importAll(require.context(`../images/memorabilia`, false, /\.(png|jpe?g|JPG|JPEG|svg)$/));
    } else if (service === 'Shadow Frame') {
      imgObj = importAll(require.context(`../images/shadow-frame`, false, /\.(png|jpe?g|JPG|JPEG|svg)$/));
    }
    const imgArr = Object.keys(imgObj);
    setImages(imgArr);

    const grid = document.querySelector('.services-page__img-wrapper');
    imagesLoaded( grid, function() {;
      new Masonry( grid, {
        itemSelector: '.services-page__item',
        columnWidth: '.services-page__item',
        percentPosition: true
      });
    });
  }, [setImages, service]);


	return (
	<React.Fragment>
		<ServicesNavigation handleServiceSelection={handleServiceSelection}/>
		<div>
			<ServicesSection title={service} images={images} text={text}/>
		</div>
	</React.Fragment>
	);
};

export default App;