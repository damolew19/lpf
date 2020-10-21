import React, {useState, useEffect} from "react";

import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';





const Images = ({images}) => {


  return(
      images.map((img, index) => {
        return (
          <div className='services-page__item' key={index}>
            <img className='services-page__item-image' src={`../images/${img.substring(2)}`} alt='pictureframing'/>
          </div>
        );
      })
      );
     
  };

  


const ServicesSection = ({title}) => {

  const [images, setImages] = useState([]);
  const [masonry, setMasonry] = useState('');

  
  const cache = {};

  function importAll (r) {
    r.keys().forEach(key => cache[key] = r(key));
    return cache;
  }

  useEffect(() => { 

    let imgObj;

    //import the correct photos on user interaction
    if (title === 'Photos') {
      imgObj = importAll(require.context(`../images/photos`, false, /\.(png|jpe?g|JPG|JPEG|svg)$/));
    } else if (title === 'Prints') {
      imgObj = importAll(require.context(`../images/prints`, false, /\.(png|jpe?g|JPG|JPEG|svg)$/));
    } else if (title === 'Canvas') {
      imgObj = importAll(require.context(`../images/canvas`, false, /\.(png|jpe?g|JPG|JPEG|svg)$/));
    } else if (title === 'Certificates') {
      imgObj = importAll(require.context(`../images/certificates`, false, /\.(png|jpe?g|JPG|JPEG|svg)$/));
    } else if (title === 'Memorabilia') {
      imgObj = importAll(require.context(`../images/memorabilia`, false, /\.(png|jpe?g|JPG|JPEG|svg)$/));
    } else if (title === 'Shadow Frame') {
      imgObj = importAll(require.context(`../images/shadow-frame`, false, /\.(png|jpe?g|JPG|JPEG|svg)$/));
    }

    
    const imgArr = Object.keys(imgObj);
    setImages(imgArr);

    const grid = document.querySelector('.services-page__img-wrapper');
    imagesLoaded( grid, function() {

      //changing state will initialize the grid after first render
      setMasonry('worked');
      new Masonry( grid, {
        itemSelector: '.services-page__item',
        columnWidth: '.services-page__item',
        percentPosition: true
      });
    });
    

  }, [title, masonry]) ;

  return(
    <div id={`services${title}`} className='services-page__content-wrapper'>
      <div className='services-page__hero-section'>
        <div className='services-page__hero-heading-wrapper'>
          <h2 className='services-page__hero-heading'>{title}</h2>
        </div>
        <div className='services-page__hero-text-wrapper'>
          <p className='services-page__hero-text'>
            Have your photos perfectly placed within the frame. No bubbles, no dust, no creases.
          </p>
        </div>
      </div>

      <div className='services-page__img-wrapper'>
        <Images images={images}/>
      </div>

     
    </div>
    );
};

export default ServicesSection;

