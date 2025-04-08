document.addEventListener("DOMContentLoaded", function () {
  // TOPページのスライダー
  document.querySelectorAll(".top__slider").forEach(function (element) {
    new Splide(element, {
      type: "loop",
      perPage: 3,
      perMove: 1,
      start: 0,
      arrows: true, // TOPページ用の設定
      pagination: false, // TOPページ用の設定
      autoplay: true,
      speed: 800,
      breakpoints: {
        960: {
          perPage: 2,
        },
        768: {
          perPage: 1.5,
        },
        500: {
          perPage: 1.2,
        },
      },
      interval: 3000,
      pauseOnHover: true,
      pauseOnFocus: true,
    }).mount();
  });

  // works詳細ページのスライダー
  document.querySelectorAll(".works__slide.splide").forEach(function (element) {
    new Splide(element, {
      type: "loop",
      perPage: 3,
      perMove: 1 /* 1枚ずつスライド */,
      start: 0,
      gap: "1.5rem",
      arrows: false,
      pagination: false,
      autoplay: true,
      speed: 1000,
      breakpoints: {
        960: {
          perPage: 2.5,
        },
        800: {
          perPage: 2,
        },
        500: {
          perPage: 1.5,
        },
        400: {
          perPage: 1,
        },
      },
      interval: 4000,
      pauseOnHover: false,
      pauseOnFocus: false,
      resetProgress: false,
    }).mount();
  });
});
