let displayValue = "";
let memoryValueOne = "";
let memoryValueTwo = "";
let displayId = document.getElementById("display");
let memoryOperator = "";
let totalValue = "0";

function takeNumber(valueWriten) {
    displayValue = displayValue + valueWriten;
    displayId.innerHTML = displayValue;
}

function memory(operator) {
    if (operator === "/" || operator === "*" || operator === "-" || operator === "+") {
        memoryValueTwo = displayValue;
        memoryOperator = operator;
    }
    displayValue = "";
    displayId.innerHTML = memoryValueTwo + memoryOperator;
}

function result(buttonEqual) {
    memoryValueOne = displayValue;
    if (buttonEqual === "=" & memoryOperator === "/") {
        totalValue = memoryValueTwo / memoryValueOne;
    } if (buttonEqual === "=" & memoryOperator === "*") {
        totalValue = memoryValueTwo * memoryValueOne;
    } if (buttonEqual === "=" & memoryOperator === "-") {
        totalValue = memoryValueTwo - memoryValueOne;
    } if (buttonEqual === "=" & memoryOperator === "+") {
        totalValue = parseInt (memoryValueTwo) + parseInt (memoryValueOne);
    }
    displayValue = totalValue;
    displayId.innerHTML = displayValue;
    memoryValueTwo = totalValue;
    memoryValueOne = "";
    resultDisplay();
}

function resetDisplay(buttonC) {
    if (buttonC === "C") {
        displayValue = "";
        displayId.innerHTML = 0;
    }
} 

