let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operation = '';

function appendNumber(number) {
    currentNumber += number;
    display.value = currentNumber;
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = '';
    display.value = '';
}

function setOperation(op) {
    if (currentNumber === '') {
        return;
    }
    if (previousNumber !== '') {
        calculate();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate() {
    let result;
    switch(operation) {
        case '+':
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case '/':
            if (currentNumber === '0') {
                alert('Cannot divide by zero');
                clearDisplay();
                return;
            }
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
        default:
            result = currentNumber;
    }
    display.value = result;
    previousNumber = result;
    currentNumber = '';
    operation = '';
}
