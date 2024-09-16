//===========================================
//---------------SLIDER SCRIPT---------------
//===========================================

const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

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
    // Custom actions or animations before the slide transition
});

carousel.addEventListener('slid.bs.carousel', (event) => {
    // Custom actions or animations after the slide transition
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
//---------------------BACK TO TOP---------------------
//=====================================================

// let backToTopBtn = document.getElementById("backToTopBtn");

// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         backToTopBtn.style.display = "block";
//     } else {
//         backToTopBtn.style.display = "none";
//     }
// };

// backToTopBtn.onclick = function () {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
// };

//======================================================
//-----------FORM SUBMIT (Google Apps Script)-----------
//======================================================

let formContactUs = document.getElementById("contactForm");
formContactUs.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector("#submitButtonContactUs").value = "Submitting...";
    let data = new FormData(formContactUs);
    // data.append('formType', 'Contact Us'); // Add formType to identify the form
    fetch('', {
        method: "POST",
        body: data,
    })
        .then(res => res.text())
        .then(data => {
            document.querySelector("#submitButtonContactUs").value = "Your form has been submitted";
            document.querySelector("#submitButtonContactUs").disabled = true;
            // document.querySelector(".form-check-input").disabled = true;
        })
})

//==========================================
//-----------JOB APPLICATION FORM-----------
//==========================================

let jobApplicationForm = document.getElementById("jobApplicationForm");
jobApplicationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector("#submitButtonJobApplicationForm").value = "Submitting...";
    let data = new FormData(jobApplicationForm);
    // data.append('formType', 'Job Application'); // Add formType to identify the form
    fetch('CHANGE_THIS_WITH_WEB_APP_URL', {
        method: "POST",
        body: data,
    })
        .then(res => res.text())
        .then(data => {
            document.querySelector("#submitButtonJobApplicationForm").value = "Your application has been submitted";
            document.querySelector("#submitButtonJobApplicationForm").disabled = true;
            // document.querySelector(".form-check-input").disabled = true;
        })
})