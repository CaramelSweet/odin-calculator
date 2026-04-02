const button = document.querySelector(".calculator");
const screen = document.querySelector(".screen");

function add(a, b) {
    const result = Number(a) + Number(b)
    updateScreen(result);
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

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            add(a,b);
            break;
        case "-":
            subtract(a,b);
            break;
        case "*":
            multiply(a,b);
            break;
        case "/":
            divide(a,b);
            break;
        default:
            console.log("Unrecognized character!")
            break;
    }
}

function updateScreen(text) {
    if (text == "") {
        screen.textContent = ""
    } else {
        screen.textContent += text;
    }
}

function clear() {
    a = "";
    b = "";
    operator = undefined;
    updateScreen("");
}

function updateNumber(num) {
    if (operator === undefined) {
        a += num;
    } else {
        b += num;
    }
    console.log("A: ", a);
    console.log("B: ", b);
    updateScreen(num);
}

function updateOperator(symbol) {
    if (operator == undefined) {
        operator = symbol;
    }
    updateScreen("");
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
        operate(operator,a,b);
    }

})

let a = "";
let b = "";
let operator = undefined;

