export const lazyLoading = document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;    


    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          console.log('Working');
          // var image = entry.target;
          // image.src = image.dataset.src;
          // image.classList.remove("lazy");
          // imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  // } else {  
  //   var lazyloadThrottleTimeout;
  //   lazyloadImages = document.querySelectorAll(".lazy");
    
  //   const lazyload = () => {
  //     if(lazyloadThrottleTimeout) {
  //       clearTimeout(lazyloadThrottleTimeout);
  //     }    

  //     lazyloadThrottleTimeout = setTimeout(function() {
  //       var scrollTop = window.pageYOffset;
  //       lazyloadImages.forEach(function(img) {
  //           if(img.offsetTop < (window.innerHeight + scrollTop)) {
  //             img.src = img.dataset.src;
  //             img.classList.remove('lazy');
  //           }
  //       });
  //       if(lazyloadImages.length == 0) { 
  //         document.removeEventListener("scroll", lazyload);
  //         window.removeEventListener("resize", lazyload);
  //         window.removeEventListener("orientationChange", lazyload);
  //       }
  //     }, 20);
  //   };

  //   document.addEventListener("scroll", lazyload);
  //   window.addEventListener("resize", lazyload);
  //   window.addEventListener("orientationChange", lazyload);
  // }
});