const calc = document.getElementById("calc");
const showDay = document.getElementById("showDay");
const setDay = document.getElementById("setDay");

const dday_KEY = "dday";
const setdday_KEY = "setdday";

function onClick(event) {
    event.preventDefault();
    const today = new Date();
    const dday = new Date(document.getElementById("date").value);
    const result = dday.getTime() - today.getTime();
    const day = Math.ceil(result / 1000 / 60 / 60 / 24);
    
    localStorage.setItem(dday_KEY, day);
    localStorage.setItem(setdday_KEY, document.getElementById("date").value);
    paintdday(day);
}

function paintdday(day) {
    setDay.innerText = `${localStorage.getItem(setdday_KEY)} 까지`;
    showDay.innerText = `D-${day}`;
}

const savedsetDday = localStorage.getItem(setdday_KEY);
const savedDday = localStorage.getItem(dday_KEY);
if (savedDday === null) {
    calc.addEventListener("click", onClick);
} else {
    paintdday(savedDday);
    calc.addEventListener("click", onClick);
}