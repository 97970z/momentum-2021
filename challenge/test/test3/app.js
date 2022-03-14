const guessNumber = document.getElementById("guessNumber");
const myNumber = document.getElementById("myNumber");
const rangeNumber = document.getElementById("range");
const result1 = document.querySelector("#result span:first-child");
const result2 = document.querySelector("#result span:last-child");


function paintResult(event) {
    event.preventDefault();
    
    const range = parseInt(rangeNumber.value);
    const number = parseInt(myNumber.value);
    const machineNumber = Math.floor(Math.random() * (range + 1));
    
    
    if(number < 0 || range < 0) {
        result1.innerText = "You cannot enter a number less than 0.";
        result2.innerText = "";
    } else if(number > range){
        result1.innerText = `You cannot enter a number greater than ${range}`;
        result2.innerText = "";

    } else if(number === machineNumber){
        result1.innerText = `You chose: ${number}, machine chose: ${machineNumber}.`;
        result2.innerText = "You won!"
    } else {
        result1.innerText = `You chose: ${number}, machine chose: ${machineNumber}.`;
        result2.innerText = "You lost!";
    }
}

guessNumber.addEventListener("submit", paintResult);