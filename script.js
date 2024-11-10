// script.js

let display = document.getElementById("display");
let currentInput = "";
let firstOperand = null;
let operator = null;

function appendNumber(number) {
    if (currentInput === "0" && number === "0") return; // Prevent multiple leading zeros
    if (currentInput.includes(".") && number === ".") return; // Prevent multiple decimals

    currentInput += number;
    display.innerText = currentInput;
}

function chooseOperator(selectedOperator) {
    if (currentInput === "" && firstOperand == null) return; // Prevent choosing operator without a number
    if (firstOperand !== null) {
        calculate();
    }
    
    operator = selectedOperator;
    firstOperand = parseFloat(currentInput);
    currentInput = ""; // Reset input for next operand
}

function calculate() {
    if (operator == null || firstOperand == null || currentInput === "") return;

    let secondOperand = parseFloat(currentInput);
    let result = 0;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = secondOperand !== 0 ? firstOperand / secondOperand : "Error";
            break;
    }

    display.innerText = result;
    firstOperand = result;
    currentInput = "";
    operator = null;
}

function clearDisplay() {
    display.innerText = "0";
    currentInput = "";
    firstOperand = null;
    operator = null;
}
