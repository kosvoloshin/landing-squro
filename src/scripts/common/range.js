const range = document.querySelectorAll(".range");
const counts = document.querySelectorAll(".value__count");

const countsObj = {
    0: 2.4,
    1: 30,
};

const totalValue = (a, b) => a.innerHTML * b.innerHTML;

const handlerRange = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i].nextElementSibling.style.width = `${arr[i].value}%`;
        counts[i].innerHTML = Math.round(arr[i].value * countsObj[i]);
    }

    counts[2].innerHTML = `${totalValue(counts[0], counts[1])} Points`;
};

for (let i = 0; i < range.length; i++) {
    range[i].oninput = () => {
        handlerRange(range);
    };
}

handlerRange(range);
