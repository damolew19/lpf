import Masonry from 'masonry-layout';


const grid = document.querySelector('.services-page__img-wrapper');



// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( grid, {
  itemSelector: '.services-page__item',
  columnWidth: '.services-page__item',
  percentPosition: true
});

export default msnry;