const slides = document.querySelectorAll(".slider__item");
const dots = document.querySelectorAll(".dots__btn");

let currentSlide = 0;

function goToSlide(n) {
    slides[currentSlide].className = "slider__item";
    dots[currentSlide].className = "dots__btn";
    currentSlide = n;
    slides[currentSlide].className = "slider__item active";
    dots[currentSlide].className = "dots__btn active";
}

function setupListners() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", () => {
            goToSlide(dots[i].dataset.num);
        });
    }
}

module.exports = setupListners;
