let firstOperand, secondOperand, operator;


function operate(firstOperand, secondOperand, operator) {
    switch(operator) {
        case '+':
            add(firstOperand, secondOperand);
            break;
        case '−':
            subtrant(firstOperand, secondOperand);
            break;
        case '×':
            multiply(firstOperand, secondOperand);
            break;        
        case '÷':
            divide(firstOperand, secondOperand);
            break;
        case '%':
            module(firstOperand, secondOperand);
            break;
    }
}












function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function module(num1, num2) {
    return num1 % num2;
}