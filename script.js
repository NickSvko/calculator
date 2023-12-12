let equation = {
    firstOperand: '0',
    secondOperand: '',
    operator: '',
}
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => addEventListener('click', buttonPressed));


function buttonPressed(button) {
    let element = button.target;

    if(element.classList.contains('number')) {
        numberPressed(element.textContent);
    }
    else if(element.classList.contains('operator')) {
        operatorPressed(element.textContent);
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


function numberPressed(number) {
    display.textContent += number;

    if(equation.operator == '') {
        equation.firstOperand == '0' ? equation.firstOperand = number : equation.firstOperand += number;
        display.textContent = equation.firstOperand;
    }
    else {
        equation.secondOperand += number;
        display.textContent = equation.secondOperand;
    }
}


function operatorPressed(operator) {
    if(equation.secondOperand != '') {
        equation.firstOperand = operate(equation);
        equation.secondOperand = '';
        display.textContent = equation.firstOperand;
    }
    equation.operator = operator;
}


function clearPressed(displayText = '') {
    equation.firstOperand = '0';
    equation.secondOperand = '';
    equation.operator = '';
    display.textContent = displayText;
}

function operate(equation) {
    let firstNumber = Number(equation.firstOperand);
    let secondNumber = Number(equation.secondOperand);
    let result;

    switch(equation.operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '−':
            result = firstNumber - secondNumber;
            break;
        case '×':
            result = firstNumber * secondNumber;
            break;        
        case '÷':
            secondNumber == 0 ? clearPressed("Not a Number") : result = firstNumber / secondNumber;
            break;
        case '%':
            result = firstNumber % secondNumber;
        }
        return result;
}