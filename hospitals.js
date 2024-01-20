// const book_display = document.querySelector(".book1");
// const book_remove = document.querySelector(".remove_Book");
const seebete = document.querySelector(".seebete");
const seeNardic = document.querySelector(".seeNardic");
const seeAmin = document.querySelector(".seeAmin");
const seegebriel = document.querySelector(".seegebriel");
const seeAddis = document.querySelector(".seeAddis");
const seeMyung = document.querySelector(".seeMyung");

const overOver = document.querySelector(".overOver");

const bete = document.querySelector(".bete");
const Nardic = document.querySelector(".Nardic");
const Amin = document.querySelector(".Amin");
const Gebriel = document.querySelector(".gebriel");
const Addis = document.querySelector(".Addis");
const Myung = document.querySelector(".Myung");

/////////////////////

// book_display.addEventListener("click", function () {
//     document.querySelector(".hidden_window").style.display="block";
//     alert('hi')
//   });

//   book_remove.addEventListener("click", function () {
//     document.querySelector(".hidden_window").classList.remove("create_book_win");
//   });

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
