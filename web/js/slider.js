document.addEventListener("DOMContentLoaded", function () {
  // すべてのスライダーを取得
  document.querySelectorAll(".splide").forEach(function (element) {
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
