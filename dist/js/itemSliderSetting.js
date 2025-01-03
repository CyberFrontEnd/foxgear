$(document).ready(function () {
  const itemSlider = new Swiper(".itemSlider", {
    cssMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });
});