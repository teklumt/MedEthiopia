document.querySelector(".menu_triger").addEventListener("click", function () {
  document.querySelector(".side_nav ").classList.toggle("hidden");
  document.querySelector(".overlay").classList.toggle("hidden");
});

// Slide show
let n = 1;

const slideShow = () => {
  n += 1;
  if (n > 2) {
    n = 1;
  }
  document.querySelector(
    ".cont"
  ).style.backgroundImage = `url(NavImags/${n}.jpg)`;

  setTimeout(slideShow, 9000);
};

slideShow();
