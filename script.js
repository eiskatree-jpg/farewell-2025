const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stops page reload

  alert("Your message will be read when we say goodbye, but remembered forever💖.Thank you for being part of our story.");

  form.reset(); // clears the form
});



/*let slides = document.querySelectorAll(".slide");
let index = 0;

function showNextSlide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

setInterval(showNextSlide, 3500);


let slides = document.querySelectorAll(".slide");
let captionText = document.getElementById("captionText");
let index = 0;

function showNextSlide() {
  slides[index].classList.remove("active");

  index = (index + 1) % slides.length;

  slides[index].classList.add("active");
  captionText.style.opacity = 0;

  setTimeout(() => {
    captionText.textContent = slides[index].dataset.caption;
    captionText.style.opacity = 1;
  }, 400);
}

setInterval(showNextSlide, 3500);


*/

let slides = document.querySelectorAll(".slide");
let captionText = document.getElementById("captionText");
let index = 0;

function showNextSlide() {
  slides[index].classList.remove("active", "zoom");

  index = (index + 1) % slides.length;

  slides[index].classList.add("active");

  // small delay before zoom starts
  setTimeout(() => {
    slides[index].classList.add("zoom");
  }, 100);

  // caption fade
  captionText.style.opacity = 0;
  setTimeout(() => {
    captionText.textContent = slides[index].dataset.caption;
    captionText.style.opacity = 1;
  }, 400);
}

setInterval(showNextSlide, 4000);
