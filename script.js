let firstOperand = "0";
let secondOperand = "";
let operator = "";

const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => addEventListener('click', buttonPressed));


function buttonPressed(button) {
    let element = button.target;
    if(element.classList.contains('number')) {
        numberPressed(element);
    }
    else if(element.classList.contains('operator')) {
        operatorPressed(element);
    }
    else if(element.id == 'decimalBtn') {
        decimalPressed(element);

    }
    else if(element.id == 'clearBtn'){
        clearPressed(element);
    }
    else if(element.id == 'signBtn') {
        changeSignPressed(element);
    }
    else if(element.id == 'equalityBtn') {
        equalPressed(element);
    }
}


function operate(firstOperand, secondOperand, operator) {
    switch(operator) {
        case '+':
            add(firstOperand, secondOperand);
            break;
        case '−':
            subtract(firstOperand, secondOperand);
            break;
        case '×':
            multiply(firstOperand, secondOperand);
            break;        
        case '÷':
            divide(firstOperand, secondOperand);
            break;
        case '%':
            module(firstOperand, secondOperand);
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