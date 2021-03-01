// section for slideshow
var slideIndex = 0
document.addEventListener('DOMContentLoaded', showSlides)

// prev next control
function plusSlides(n) {
  // clear any previous timeouts
  clearTimeout(timeoutID)
  slideIndex += n

  showSlides()
}

// storage of any previous timeouts
var timeoutID

// slideshow function
function showSlides() {
  // clear previous timeouts
  clearTimeout(timeoutID)

  var i;
  var slides = document.getElementsByClassName("Slide")
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  slideIndex ++;
  // reset lines
  if (slideIndex >= slides.length) {
    slideIndex = 0
  } else if (slideIndex < 0) {
    slideIndex = 2
  }
  slides[slideIndex].style.display ="block";
  // change image every 5 seconds
  timeoutID = setTimeout(showSlides, 3000);
}