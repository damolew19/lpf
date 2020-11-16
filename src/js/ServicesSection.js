import React, {useEffect} from "react";




const Images = ({images}) => {

  return(
      images.map((img, index) => {
        return (
          <div className='services-page__item' key={index}>
            <img 
              className='services-page__item-image lazy' 
              src={`https://ik.imagekit.io/damolew19/images/${img.substring(2)}?tr=bl-30,q-50`} 
              data-srcset={`https://ik.imagekit.io/damolew19/images/${img.substring(2)}?tr=w-320 320w,
                       https://ik.imagekit.io/damolew19/images/${img.substring(2)}?tr=w-480 480w,
                       https://ik.imagekit.io/damolew19/images/${img.substring(2)}?tr=w-720 720w`}
              data-sizes="(max-width: 480px) 100vw,
                     (max-width: 720px) 50vw, 
                      33vw"
              alt='pictureframing'  
            />
          </div>
        );
      })
      );
     
  };

  


const ServicesSection = ({title, images, text}) => {

  function lazy() {
  var lazyloadImages;    
  lazyloadImages = document.querySelectorAll(".lazy");


  function callback(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.intersectionRatio > 0) {
          var image = entry.target;
          image.src = image.dataset.srcset;
        }
      });
  }

  const options = {
    threshold: [1.0],
    rootMargin: '0px 0px 500px 0px',  
  };

    
    var imageObserver = new IntersectionObserver(callback, options);

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
}

useEffect(() => {
  lazy();
});

  return(
    <div id={`services${title}`} className='services-page__content-wrapper'>
      <div className='services-page__hero-section'>
        <div className='services-page__hero-heading-wrapper'>
          <h2 className='services-page__hero-heading'>{title}</h2>
        </div>
        <div className='services-page__hero-text-wrapper'>
          <p className='services-page__hero-text'>
            {text}
          </p>
        </div>
      </div>

      <div className='services-page__img-wrapper'>
        <Images images={images} />
      </div>

     
    </div>
    );
};

export default ServicesSection;

