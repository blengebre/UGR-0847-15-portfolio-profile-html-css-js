// Slider functionality
const slides = document.querySelectorAll('.slide');
const radioButtons = document.querySelectorAll('input[name="hobby"]');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
}

function updateSlider() {
    radioButtons[currentSlide].checked = true;
    showSlide(currentSlide);
}

// Initialize slider
radioButtons.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Add event listeners for navigation buttons
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

// Initial slide display
showSlide(currentSlide);
