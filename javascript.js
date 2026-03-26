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

const a = 5;
const b = 2;

console.log(add(a,b));
console.log(subtract(a,b));
console.log(multiply(a,b));
console.log(divide(a,b));