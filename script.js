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
    else {
        switch(element.id) {
            case 'decimalBtn': 
                decimalPressed(element);
                break;
            case 'clearBtn': 
                clearPressed();
                break;
            case 'signBtn': 
                changeSignPressed(element);
                break;
            case 'equalityBtn': 
                equalPressed(element);
        }
    }
}


function changeSignPressed() {
    if(equation.secondOperand == '') {
        equation.firstOperand = (-1) * Number(equation.firstOperand);
        display.textContent = equation.firstOperand;
    }
    else {
        equation.secondOperand = (-1) * Number(equation.secondOperand);
        display.textContent = equation.secondOperand;
    }
}


function equalPressed() {
    if(equation.secondOperand != '') {
        if(equation.operator == '÷' && equation.secondOperand == '0') {
            clearPressed("Not a Number");
        }
        else {
            equation.firstOperand = operate(equation);
            equation.secondOperand = '';
            display.textContent = equation.firstOperand;   
        }
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
    equalPressed();
    equation.operator = operator;
}


function clearPressed(text = '') {
    equation.firstOperand = '0';
    equation.secondOperand = '';
    equation.operator = '';
    display.textContent = text;
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
            result = firstNumber / secondNumber;
            break;
        case '%':
            result = firstNumber % secondNumber;
    }
        return result;
}