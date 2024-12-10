let previousValue = 0;
let currentOperation = null;

function enterNumber(number) {
  const display = document.calculatorForm.display;
  if (display.value === "0") {
    display.value = number;
  } else {
    display.value += number;
  }
}

function setOperation(operation) {
  previousValue = parseFloat(document.calculatorForm.display.value);
  currentOperation = operation;
  document.calculatorForm.display.value = "0";
}

function backspace() {
  const display = document.calculatorForm.display;
  display.value = display.value.slice(0, -1) || "0";
}

function clearDisplay() {
  document.calculatorForm.display.value = "0";
  previousValue = 0;
  currentOperation = null;
}

function calculateResult() {
  const currentValue = parseFloat(document.calculatorForm.display.value);
  let result = 0;

  switch (currentOperation) {
    case "+":
      result = previousValue + currentValue;
      break;
    case "-":
      result = previousValue - currentValue;
      break;
    case "*":
      result = previousValue * currentValue;
      break;
    case "/":
      result = currentValue !== 0 ? previousValue / currentValue : "Error";
      break;
    case "%":
      result = previousValue % currentValue;
      break;
    default:
      result = currentValue;
  }

  document.calculatorForm.display.value = result;
  previousValue = 0;
  currentOperation = null;
}
