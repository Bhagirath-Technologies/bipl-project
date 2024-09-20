//===========================================
//---------------SLIDER SCRIPT---------------
//===========================================

const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // // Variables for dragging on desktop
    // let isDragging = false;
    // let startX;
    // let scrollLeft;

    // // Handle mouse down event for dragging
    // imageList.addEventListener("mousedown", (e) => {
    //     isDragging = true;
    //     startX = e.pageX - imageList.offsetLeft;
    //     scrollLeft = imageList.scrollLeft;
    //     imageList.style.cursor = "grabbing";
    // });

    // // Handle mouse up and leave events to stop dragging
    // imageList.addEventListener("mouseup", () => {
    //     isDragging = false;
    //     imageList.style.cursor = "grab";
    // });

    // imageList.addEventListener("mouseleave", () => {
    //     isDragging = false;
    //     imageList.style.cursor = "grab";
    // });

    // // Handle mouse move event to drag the images
    // imageList.addEventListener("mousemove", (e) => {
    //     if (!isDragging) return;
    //     e.preventDefault();
    //     const x = e.pageX - imageList.offsetLeft;
    //     const walk = (x - startX) * 2; // Adjust scroll speed
    //     imageList.scrollLeft = scrollLeft - walk;
    // });

    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);

//====================================================
//---------------COUNTER SECTION SCRIPT---------------
//====================================================

const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 80;

counterNum.forEach((curElem) => {
    const updateNumber = () => {
        const targetNumber = parseInt(curElem.dataset.number);
        // console.log(targetNumber);
        const initialNum = parseInt(curElem.innerText);
        // console.log(initialNum);
        const incrementNumber = Math.trunc(targetNumber / speed);

        if (initialNum < targetNumber) {
            curElem.innerText = `${initialNum + incrementNumber}`;
            setTimeout(updateNumber, 10);
        } else {
            curElem.innerText = `${targetNumber} %`;
        }
    };
    updateNumber();
});

//=======================================================
//---------------CAROUSEL ANIMATION SCRIPT---------------
//=======================================================

const carousel = document.querySelector('#carouselExampleFade');

carousel.addEventListener('slide.bs.carousel', (event) => {
});

carousel.addEventListener('slid.bs.carousel', (event) => {
});

//=====================================================
//---------------CAREER PAGE CARD SCRIPT---------------
//=====================================================

function toggleContent(id) {
    const content = document.getElementById(id);
    content.classList.toggle('content-hidden');
    content.classList.toggle('content-visible');
}

//=====================================================
//---------------NAVBAR SCROLLING SCRIPT---------------
//=====================================================

// This is the script that makes the navbar vanish when a user scrolls down

// document.addEventListener('DOMContentLoaded', function () {
//     let lastScrollTop = 0;
//     const navbar = document.querySelector('.custom-navbar');

//     // Detect if screen width is below 768px
//     const isMobileView = window.matchMedia("(max-width: 767px)");

//     window.addEventListener('scroll', function () {
//         if (isMobileView.matches) { // Apply only on mobile screens
//             let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

//             if (currentScrollTop > lastScrollTop) {
//                 // User is scrolling down, hide the navbar
//                 navbar.classList.add('navbar-hidden');
//             } else {
//                 // User is scrolling up, show the navbar
//                 navbar.classList.remove('navbar-hidden');
//             }

//             lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Prevent negative scroll values
//         }
//     });
// });
