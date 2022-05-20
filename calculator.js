function add(a, b) {
    return +a + +b
}

function subtract(a, b) {
    return +a - +b
}

function multiply(a, b) {
    return +a * +b
}

function divide(a , b) {
    return +a / +b
}

function operate(operator, a, b) {
    if (operator === "+") return add(a, b)
    if (operator === "-") return subtract(a, b)
    if (operator === "*") return multiply(a, b)
    if (operator === "/") return divide(a, b)
}

const numbers = document.querySelectorAll(".number")

const display = document.querySelector("#display")

function modifyDisplay() {
    display.textContent += this.textContent
}

numbers.forEach(function(number) {
    
    number.addEventListener("click", modifyDisplay)
})

const operators = document.querySelectorAll(".operator")

let operatorChosen

let a

function showOperators() {

    if (display.textContent.includes("+") ||
        display.textContent.includes("*") ||
        display.textContent.includes("-") ||
        display.textContent.includes("/")) getResult();

    

    a = display.textContent
    
    display.textContent += this.textContent

    operatorChosen = this.textContent
    console.log(operatorChosen)
}

operators.forEach(function(operator) {
    
    operator.addEventListener("click", showOperators)
})

const equal = document.querySelector("#equal")

let b

function getResult() {

    b = display.textContent.charAt(display.textContent.length - 1)
    console.log(b)
    console.log(operatorChosen)

    if (operatorChosen === "+") display.textContent = add(a, b)
    if (operatorChosen === "-") display.textContent = subtract(a, b)
    if (operatorChosen === "*") display.textContent = multiply(a, b)
    if (operatorChosen === "/") display.textContent = divide(a, b)

}

equal.addEventListener("click", getResult)

const clear = document.querySelector("#clear")

function clearCalculator() {
    a = ""
    b = ""
    operatorChosen = ""
    display.textContent = ""
}

clear.addEventListener("click", clearCalculator)

