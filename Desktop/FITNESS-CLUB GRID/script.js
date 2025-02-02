const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    },
  // навигация
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      640: {
      slidesPerView: 2,
      },
      952: {
      slidesPerView: 3,
      },
      1024: {
      slidesPerView: 5,
      },
  },
});
