const menuItems = document.querySelectorAll(".menu__link");
const header = document.querySelector(".header");

header.addEventListener("click", (e) => {
    if (e.target.classList.contains("lang__control")) {
        e.target.classList.toggle("active");
    }

    if (e.target.classList.contains("menu__link")) {
        e.preventDefault();

        if (window.innerWidth > 1023) {
            for (let i = 0; i < menuItems.length; i++) {
                menuItems[i].classList.remove("active");
            }

            e.target.classList.add("active");
        }

        if (window.innerWidth < 1024) {
            if (!e.target.classList.contains("active")) {
                for (let i = 0; i < menuItems.length; i++) {
                    menuItems[i].classList.remove("active");
                    menuItems[i].nextElementSibling.style.height = null;
                }

                e.target.classList.add("active");
                e.target.nextElementSibling.style.height = e.target.nextElementSibling.scrollHeight + "px";
            } else {
                e.target.classList.remove("active");
                e.target.nextElementSibling.style.height = null;
            }
        }
    }
});
