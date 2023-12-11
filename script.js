let equation = {
    firstOperand: "0",
    secondOperand: "",
    operator: "",
}
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => addEventListener('click', buttonPressed));


function buttonPressed(button) {
    let element = button.target;

    if(element.classList.contains('number')) {
        numberPressed(element.textContent);
    }
    // else if(element.classList.contains('operator')) {
    //     operatorPressed(element);
    // }
    // else if(element.id == 'decimalBtn') {
    //     decimalPressed(element);

    // }
    // else if(element.id == 'clearBtn'){
    //     clearPressed(element);
    // }
    // else if(element.id == 'signBtn') {
    //     changeSignPressed(element);
    // }
    // else if(element.id == 'equalityBtn') {
    //     equalPressed(element);
    // }
}


function numberPressed(numberString) {
    display.textContent += numberString;

    if(equation.operator == '') {
        equation.firstOperand == '0' ? equation.firstOperand = numberString : equation.firstOperand += numberString;
        display.textContent = equation.firstOperand;
    }
    else {
        equation.secondOperand += numberString;
        display.textContent = equation.secondOperand;
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