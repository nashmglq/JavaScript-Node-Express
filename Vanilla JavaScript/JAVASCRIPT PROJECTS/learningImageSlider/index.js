const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let interValId = null;

// the image load after the whole DOM loaded
document.addEventListener("DOMContentLoaded", initial);

function initial() {
  if (slideIndex >= 0) {
    slides[slideIndex].classList.add("displaySlide");
    //setInterval or timeout it will return id but if I give it a string, char or int it will return what i give
    interValId = setInterval(next, 5000);
    console.log(interValId);
  }
}

function show(index) {
  // if we move to next or prev we will remove the current display

  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });

  // we are using slideIndex because we have that for out if statment where it will reset the index count
  slides[slideIndex].classList.add("displaySlide");
}

function prev() {
    clearInterval(interValId)
    slideIndex--;
    show(slideIndex);
}

function next() {
  slideIndex++;
  show(slideIndex);
  // it will return to the show function the new slideIndex value
  // the index parameter will be taking that
}
