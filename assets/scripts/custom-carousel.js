const carouselInner = document.querySelector('.custom-carousel-inner');
const indicators = document.querySelectorAll('.custom-indicator');

let currentIndex = 0;

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;

    indicators.forEach(ind => ind.classList.remove('active'));
    indicators[currentIndex].classList.add('active');
}

// Auto-slide every 3 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % indicators.length;
    updateCarousel();
}, 3000);
