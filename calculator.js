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
        display.textContent.substr(1).includes("-") ||
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

let result

function getResult() {

    let displaySplit = display.textContent.split("")

    let displayJoined = displaySplit.join(" ")

    let position

    if (operatorChosen === "+") position = displayJoined.search("\\+")
    if (operatorChosen === "-") {

        let displayJoinedMinus = displayJoined.substr(1)

        console.log(displayJoinedMinus)

        if (a.includes("-")) {
            position = displayJoinedMinus.search("\\-")
            displayJoined = displayJoinedMinus
        }
        else {position = displayJoined.search("\\-")
        console.log(displayJoined)
        console.log(position)}
    }
    if (operatorChosen === "*") position = displayJoined.search("\\*")
    if (operatorChosen === "/") position = displayJoined.search("\\/")

    let bSpaced = displayJoined.substr(position + 1)

    console.log(bSpaced)

    b = bSpaced.replaceAll(" ", "")

    if (operatorChosen === "/" && b === "0") display.textContent = "Error"

    else {
    if (operatorChosen === "+") display.textContent = Math.round((add(a, b) + Number.EPSILON) * 10000) / 10000
    if (operatorChosen === "-") {
        display.textContent = Math.round((subtract(a, b) + Number.EPSILON) * 10000) / 10000

    }
    if (operatorChosen === "*") display.textContent = Math.round((multiply(a, b) + Number.EPSILON) * 10000) / 10000
    if (operatorChosen === "/") display.textContent = Math.round((divide(a, b) + Number.EPSILON) * 10000) / 10000
    result = display.textContent
    let numberResult = Number(result)
    if (result.length > 8) display.textContent = numberResult.toExponential(2)
    if (numberResult.toExponential(2).length > 8) display.textContent = "Error"
    }   
}

equal.addEventListener("click", getResult)

const clear = document.querySelector("#clear")

function clearCalculator() {
    a = ""
    b = ""
    operatorChosen = ""
    display.textContent = ""
    floating.addEventListener("click", useFloating)

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

const buttons = document.querySelectorAll("button")

buttons.forEach(function(button) {
    
    button.addEventListener("click", function() {
        if (display.textContent.includes("Error") || display.textContent.includes("NaN")) {
            clearCalculator()
        }
    })
})

