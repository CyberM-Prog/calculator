function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a , b) {
    return a / b
}

function operate(operator, a, b) {
    if (operator === "+") return add(a, b)
    if (operator === "-") return subtract(a, b)
    if (operator === "*") return multiply(a, b)
    if (operator === "/") return divide(a, b)
}

const numbers = document.querySelectorAll(".number")

const display = document.querySelector("#display")

let displayValue

function modifyDisplay() {
    display.textContent += this.textContent

    displayValue = display.textContent
}

numbers.forEach(function(number) {
    
    number.addEventListener("click", modifyDisplay)
})

const operators = document.querySelectorAll(".operator")

let previousNumber

function showOperators() {

    previousNumber = displayValue
    
    display.textContent += this.textContent

    displayValue = display.textContent
}

operators.forEach(function(operator) {
    
    operator.addEventListener("click", showOperators)
})