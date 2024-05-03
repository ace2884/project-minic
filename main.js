
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Function to clear display
function clearDisplay() {
    document.getElementById("display").value = '';
}

// Function to calculate result
function calculate() {
    var result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
}