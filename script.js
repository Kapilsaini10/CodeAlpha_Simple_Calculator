// Function to append characters to display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  // Function to append functions to display
  function appendFunction(value) {
    document.getElementById('display').value += value;
  }
  
  // Function to clear the display
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // Function to evaluate the expression and display result
  function calculate() {
    let display = document.getElementById('display');
    let result = eval(display.value);
    display.value = result;
  }
  function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  