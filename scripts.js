let display = document.getElementById('output');

// Event Listeners

let button = document.getElementsByTagName('button');

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', buttonValue);
}

function buttonValue() {
    let value = this.textContent;
    displayValue(value);
}

function displayValue(value) {
    display.textContent = value;
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

