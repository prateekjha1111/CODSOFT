let displayValue = '';

document.getElementById('btn7').addEventListener('click', () => appendToDisplay('7'));
document.getElementById('btn8').addEventListener('click', () => appendToDisplay('8'));
document.getElementById('btn9').addEventListener('click', () => appendToDisplay('9'));
document.getElementById('btnAdd').addEventListener('click', () => operation('+'));
document.getElementById('btn4').addEventListener('click', () => appendToDisplay('4'));
document.getElementById('btn5').addEventListener('click', () => appendToDisplay('5'));
document.getElementById('btn6').addEventListener('click', () => appendToDisplay('6'));
document.getElementById('btnSubtract').addEventListener('click', () => operation('-'));
document.getElementById('btn1').addEventListener('click', () => appendToDisplay('1'));
document.getElementById('btn2').addEventListener('click', () => appendToDisplay('2'));
document.getElementById('btn3').addEventListener('click', () => appendToDisplay('3'));
document.getElementById('btnMultiply').addEventListener('click', () => operation('*'));
document.getElementById('btnClear').addEventListener('click', clearDisplay);
document.getElementById('btn0').addEventListener('click', () => appendToDisplay('0'));
document.getElementById('btnEquals').addEventListener('click', calculate);
document.getElementById('btnDivide').addEventListener('click', () => operation('/'));

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').innerText = displayValue;
}

function operation(operator) {
  if (displayValue !== '' && !isNaN(displayValue.charAt(displayValue.length - 1))) {
    displayValue += operator;
    document.getElementById('display').innerText = displayValue;
  }
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').innerText = '0';
}

function calculate() {
  if (displayValue !== '' && !isNaN(displayValue.charAt(displayValue.length - 1))) {
    let result = eval(displayValue);
    document.getElementById('display').innerText = result;
    displayValue = result.toString();
  }
}
