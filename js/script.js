let currentExpression = "";

function pressKey(key) {
    currentExpression += key;
    updateDisplay();
}

function clearDisplay() {
    currentExpression = "";
    updateDisplay();
}

function calculate() {
    try {
        let result = eval(currentExpression);
        currentExpression = result.toString();
    } catch (error) {
        currentExpression = "Error";
    }
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('calc-display');
    display.value = currentExpression;
}
