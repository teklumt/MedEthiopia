//////////////////////////////

const book_display1 = document.querySelector(".book");
const book_remove1 = document.querySelector(".remove_Book");
const book_back1 = document.querySelector(".bookBack");

const seebete = document.querySelector(".seebete");
const seeNardic = document.querySelector(".seeNardic");
const seeAmin = document.querySelector(".seeAmin");
const seegebriel = document.querySelector(".seegebriel");
const seeAddis = document.querySelector(".seeAddis");
const seeMyung = document.querySelector(".seeMyung");
const seeLandMark = document.querySelector(".seeLandMark");
const seeKal = document.querySelector(".seeKal");

const overOver = document.querySelector(".overOver");

const bete = document.querySelector(".bete");
const Nardic = document.querySelector(".Nardic");
const Amin = document.querySelector(".Amin");
const Gebriel = document.querySelector(".gebriel");
const Addis = document.querySelector(".Addis");
const Myung = document.querySelector(".Myung");
const LandMark = document.querySelector(".LandMark");
const Kal = document.querySelector(".Kal");

///////////////////////////////////////////

book_display1.addEventListener("click", function () {
  document.querySelector(".hidden_window").classList.add("create_book_win");
  book_back1.classList.add("activeBook");
});

book_remove1.addEventListener("click", function () {
  document.querySelector(".hidden_window").classList.remove("create_book_win");
  book_back1.classList.remove("activeBook");
});


///////////////////////////////////////////

seebete.addEventListener("click", function () {
  bete.classList.add("active");
  overOver.classList.add("active");
});

seeNardic.addEventListener("click", function () {
  Nardic.classList.add("active");
  overOver.classList.add("active");
});

seeAmin.addEventListener("click", function () {
  Amin.classList.add("active");
  overOver.classList.add("active");
});

seegebriel.addEventListener("click", function () {
  Gebriel.classList.add("active");
  overOver.classList.add("active");
});

seeAddis.addEventListener("click", function () {
  Addis.classList.add("active");
  overOver.classList.add("active");
});

seeMyung.addEventListener("click", function () {
  Myung.classList.add("active");
  overOver.classList.add("active");
});

seeLandMark.addEventListener("click", function () {
  LandMark.classList.add("active");
  overOver.classList.add("active");
});

seeKal.addEventListener("click", function () {
  Kal.classList.add("active");
  overOver.classList.add("active");
});
