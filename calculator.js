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

    if (operatorChosen === "/" && b === "0") return;

    floating.addEventListener("click", useFloating)

    a = display.textContent
    
    display.textContent += this.textContent

    operatorChosen = this.textContent
}

operators.forEach(function(operator) {
    
    operator.addEventListener("click", showOperators)
})

const equal = document.querySelector("#equal")

let b

function getResult() {

    b = display.textContent.charAt(display.textContent.length - 1)

    if (operatorChosen === "/" && b === "0") display.textContent = "Error! You can't divide by 0."

    else {
    if (operatorChosen === "+") display.textContent = Math.round((add(a, b) + Number.EPSILON) * 10000000) / 10000000
    if (operatorChosen === "-") display.textContent = Math.round((subtract(a, b) + Number.EPSILON) * 10000000) / 10000000
    if (operatorChosen === "*") display.textContent = Math.round((multiply(a, b) + Number.EPSILON) * 10000000) / 10000000
    if (operatorChosen === "/") display.textContent = Math.round((divide(a, b) + Number.EPSILON) * 10000000) / 10000000
    }   
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

const floating = document.querySelector("#floating")

function useFloating() {

    display.textContent += this.textContent

    floating.removeEventListener("click", useFloating)
}

floating.addEventListener("click", useFloating)

const back = document.querySelector("#back")

function removeLast() {

    display.textContent = display.textContent.replace(display.textContent.charAt(display.textContent.length - 1), "")
}

back.addEventListener("click", removeLast)

function showOperatorsKb(e) {

    window.addEventListener("keydown", useFloatingKb)

    if (display.textContent.includes("+") ||
        display.textContent.includes("*") ||
        display.textContent.includes("-") ||
        display.textContent.includes("/")) {
            getResult()
    };

    if (operatorChosen === "/" && b === "0") return;

    floating.addEventListener("click", useFloating)

    a = display.textContent
    
    display.textContent += e.key

    operatorChosen = e.key
}

window.addEventListener("keydown", function(e) {

    if (e.key === "=" || e.key === "Enter") {
        getResult()
    }

    if (e.key === "Backspace") {removeLast()}

    if (e.key === "Delete") {clearCalculator()}

    operators.forEach(function(operator) {

        if (operator.textContent === e.key) {
            showOperatorsKb(e);
            return;
        }
    })

    numbers.forEach(function(number) {

        if (number.textContent === e.key) {

            display.textContent += e.key
            return;
        }
    })
})

function useFloatingKb(b) {

    if (floating.textContent === b.key) {

        display.textContent += b.key
        window.removeEventListener("keydown", useFloatingKb)
    }
}

window.addEventListener("keydown", useFloatingKb)