document.addEventListener("click", (e) => {
    document.querySelectorAll(".tooltip").forEach((item) => {
        return item.classList.remove("active");
    });

    if (e.target.classList.contains("tooltip")) {
        e.target.classList.toggle("active");
    }
});
