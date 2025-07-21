var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: "auto",
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
