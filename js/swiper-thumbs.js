var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 1800,
    disableOnInteraction: false,
  },
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
