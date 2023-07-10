let display = document.getElementById('output');

let operator = false;

let solved = false;

let sign;

let valueOne;

let valueTwo;


// Event Listeners

let button = document.getElementsByTagName('button');

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', getButtonValue);
}

// Checks booleans and button logic

function getButtonValue() {
    
    if (solved === true) {
        display.textContent = "";
        solved = false;
    }

    let value = this.textContent;
    
        if (value === "X" || value === "+" || value === "/" || value === "-") {
            operator = true;
            sign = value;
            valueOne = display.textContent;
        } else if (value === "=") {
            getAnswer();
        } else if (value === "CC") {
            display.textContent = "";
            operator = false;
            valueOne = "";
        } else if (operator === true) {
            displayValue(value);
            valueTwo = display.textContent;
        } else {
            displayValue(value);
        }

}

function displayValue(value) {
    if (operator === true) {
        display.textContent = "";
        display.textContent += value;
        operator = false;
    } else {
        display.textContent += value;
        valueTwo = display.textContent;
    }    
}

function getAnswer() {
    valueOne = +valueOne;
    valueTwo = +valueTwo;
    if (sign === "+") {
        display.textContent = operate("+", valueOne, valueTwo);
    } else if (sign === "-") {
        display.textContent = operate("-", valueOne, valueTwo);
    } else if (sign === "X") {
        display.textContent = operate("*", valueOne, valueTwo);
    } else if (sign === "/") {
        display.textContent = operate("/", valueOne, valueTwo);
    }
    solved = true;
}

// Basic Math Operations

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Function to tie it all together

function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }
}

