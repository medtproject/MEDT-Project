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

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('.images_gallery');
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("caption");
  const closeModalBtn = document.getElementById("closeModal");
  const prevArrow = document.getElementById("prevArrow");
  const nextArrow = document.getElementById("nextArrow");

  let currentIndex = 0;

  images.forEach((img, index) => {
      img.addEventListener('click', function () {
          currentIndex = index;
          showImage(currentIndex);
          modal.style.display = "block";
      });
  });

  function showImage(index) {
      modalImg.src = images[index].src;
      captionText.innerHTML = images[index].alt;
  }

  closeModalBtn.addEventListener('click', function () {
      modal.style.display = "none";
  });

  prevArrow.addEventListener('click', function () {
      currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
      showImage(currentIndex);
  });

  nextArrow.addEventListener('click', function () {
      currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
      showImage(currentIndex);
  });

  modal.addEventListener('click', function (event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });
});