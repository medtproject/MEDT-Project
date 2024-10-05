let currentSlide = 0;

function moveSlides(n) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  currentSlide += n;

  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }

  slides.style.transform = `translateX(-${currentSlide * (100 / totalSlides)}%)`;
}
