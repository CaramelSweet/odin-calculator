const button = document.querySelector(".calculator");
const screen = document.querySelector(".screen");

let a = "";
let b = "";
let operator;

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

function operate(op, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    let result;
    switch (op) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
    }
    b = ""
    a = result.toString();
    operator = undefined;
    updateDisplay();
}

function clear() {
    a = "";
    b = "";
    operator = undefined;
    updateDisplay();
}

function updateDisplay() {
    if (b === "") {
        screen.textContent = a;
    } else if (b !== ""){
        screen.textContent = b;
    } 
}

function updateNumber(num) {
    if (operator === undefined) {
        a += num;
    } else {
        b += num;
    }
    updateDisplay();
    console.log("A: ", a);
    console.log("B: ", b);
    console.log("Operator:", operator);
}

function updateOperator(symbol) {
    if (a !== "" && b !== "" && operator !== undefined) {
        operate(operator, a, b);
    }
    operator = symbol;
}

function updateDecimal () {
    if (operator == undefined) {
        if (a.includes(".")) {
            return;
        }
    } else {
        if (b.includes(".")) {
            return;
        }
    }
    updateNumber(".")
}

// Handle button press
button.addEventListener("click", (event) => {
    const target = event.target;
    const type = target.dataset;

    if (!target.tagName === "button") return;

    if ("number" in type) {
        updateNumber(target.textContent);
    }

    if ("operator" in type) {
        updateOperator(target.textContent);
    }

    if ("clear" in type) {
        clear();
    }

    if ("equals" in type) {
        operate(operator, a, b);
    }

    if ("decimal" in type) {
        updateDecimal();
    }
})

