const btn = document.querySelector(".hamburger");
const menu = document.querySelector(".header__content");

btn.addEventListener("click", function () {
    btn.classList.toggle("active");
    menu.classList.toggle("active");
});
