const book_display2 = document.querySelector(".book");
const book_remove2 = document.querySelector(".remove_Book");
const book_back2 = document.querySelector(".bookBack");

book_display2.addEventListener("click", function () {
  document.querySelector(".hidden_window").classList.add("create_book_win");
  book_back2.classList.add("activeBook");
});

book_remove2.addEventListener("click", function () {
  document.querySelector(".hidden_window").classList.remove("create_book_win");
  book_back2.classList.remove("activeBook");
});
