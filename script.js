const book_display = document.querySelector(".book");
const book_remove = document.querySelector(".remove_Book");

/////////////

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

book_display.addEventListener("click", function () {
  document.querySelector(".hidden_window").classList.add("create_book_win");
});

book_remove.addEventListener("click", function () {
  document.querySelector(".hidden_window").classList.remove("create_book_win");
});
