let equation = {
    firstOperand: '0',
    secondOperand: '',
    operator: '',
}


const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => buttonPressed(button));
    button.addEventListener('mousedown', () => selectButton(button));
    button.addEventListener('mouseup', () => unselectButton(button));
})


function selectButton(button) {
    if(button.classList.contains('number') || button.id == 'decimalBtn') {
        button.style.backgroundColor = 'rgb(255 255 255 / 67%)';
    }
    else if(button.classList.contains('rightColumn')) {
        button.style.backgroundColor = '#ffa500b0';
    }
    else if(button.classList.contains('topLine')) {
        button.style.backgroundColor = 'rgb(141, 139, 139)';
    }
}


function unselectButton(button) {
    if(button.classList.contains('number') || button.id == 'decimalBtn') {
        button.style.backgroundColor = 'rgb(141, 139, 139)';
    }
    else if(button.classList.contains('rightColumn')) {
        button.style.backgroundColor = 'orange';
    }
    else if(button.classList.contains('topLine')) {
        button.style.backgroundColor = 'rgb(97, 94, 94)';
    }

}


function buttonPressed(button) {

    if(button.classList.contains('number')) {
        numberPressed(button.textContent);
    }
    else if(button.classList.contains('operator')) {
        if(button.id != 'moduleBtn') {
            keepButtonPressed(button);
        }
        operatorPressed(button.textContent);
    }
    else {
        switch(button.id) {
            case 'decimalBtn': 
                decimalPressed(button);
                break;
            case 'clearBtn': 
                clearPressed();
                break;
            case 'signBtn': 
                changeSignPressed(button);
                break;
            case 'equalityBtn':
                releasePressedButton(); 
                equalPressed(button);
        }
    }
}


function keepButtonPressed(button) {
    releasePressedButton();
    button.style.border = '1px solid black';
}


function releasePressedButton() {
    const operators = document.querySelectorAll('.operator');
    operators.forEach((button) => button.style.border = 'none');
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


function decimalPressed() {
    if(Number.isInteger(Number(equation.firstOperand)) && equation.operator == '') {
        equation.firstOperand += '.';
        display.textContent = equation.firstOperand;
    }
    else if(equation.operator != '') {
        if(equation.secondOperand == '') {
            equation.secondOperand = '0.';
            display.textContent = equation.secondOperand;
        }
        else if(Number.isInteger(Number(equation.secondOperand))) {
            equation.secondOperand += '.';
            display.textContent = equation.secondOperand;
        }
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
            // Rounds the 7 decimal digits of a number
            display.textContent = Math.round(equation.firstOperand * 10000000) / 10000000; 
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
    /* If both operands are occupied, perform the arithmetic operation between them */
    equalPressed();
    equation.operator = operator;
}


function clearPressed(displayText = 0) {
    releasePressedButton();
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
            result = firstNumber / secondNumber;
            break;
        case '%':
            result = firstNumber % secondNumber;
    }
        return result;
}