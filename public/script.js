let displayValue = '';

function pressKey(key) {
  displayValue += key;
  document.getElementById('display').value = displayValue;
}
  
function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
    document.getElementById('display').value = displayValue;
  } catch (error) {
    alert('Invalid input!');
    clearDisplay();
  }


}
