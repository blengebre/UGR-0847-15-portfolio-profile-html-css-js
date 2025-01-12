const slides = document.querySelector('.slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function showSlide(direction) {
  const slideCount = document.querySelectorAll('.slide').length;
  if (direction === 'next') {
    index = (index + 1) % slideCount;
  } else {
    index = (index - 1 + slideCount) % slideCount;
  }
  slides.style.transform = `translateX(-${index * 100}%)`;
}

prev.addEventListener('click', () => showSlide('prev'));
next.addEventListener('click', () => showSlide('next'));


const videoSlides = document.querySelector('.video-slides');
const videoSlide = document.querySelectorAll('.video-slide');
const videoPrev = document.querySelector('.video-prev');
const videoNext = document.querySelector('.video-next');

let videoIndex = 0;

function showVideoSlide(index) {
  const slideWidth = videoSlide[0].clientWidth;
  videoSlides.style.transform = `translateX(-${index * slideWidth}px)`;
}

videoPrev.addEventListener('click', () => {
  videoIndex = (videoIndex > 0) ? videoIndex - 1 : videoSlide.length - 1;
  showVideoSlide(videoIndex);
});

videoNext.addEventListener('click', () => {
  videoIndex = (videoIndex < videoSlide.length - 1) ? videoIndex + 1 : 0;
  showVideoSlide(videoIndex);
});

// Initialize the first slide
showVideoSlide(videoIndex);
