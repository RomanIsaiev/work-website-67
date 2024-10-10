import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.mySwiper1', {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// const swiperReviews = new Swiper('.mySwiperReviews', {
//   effect: 'coverflow',
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: 'auto',
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 170,
//     depth: 100,
//     modifier: 1,
//     slideShadows: false,
//   },
// });
