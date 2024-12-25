document.getElementById('calculate-button').addEventListener('click', function () {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const operator = document.getElementById('operator').value;
    const resultDisplay = document.getElementById('result');

    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = 'Result = Please enter valid numbers.';
        return;
    }

    if (operator === '/' && num2 === 0) {
        resultDisplay.textContent = 'Result = Division by zero is not allowed.';
        return;
    }

    // Perform the calculation
    let result;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            result = 'Invalid operation.';
    }

    // Display the result
    resultDisplay.textContent = `Result = ${result.toFixed(2)}`;
});

// Operation functions
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
