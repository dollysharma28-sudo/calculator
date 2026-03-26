function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let current = document.getElementById("display").value;
  document.getElementById("display").value = current.slice(0, -1);
}

function calculate() {
  let input = document.getElementById("display").value;
  try {
    document.getElementById("display").value = eval(input);
  } catch {
    document.getElementById("display").value = "Error";
  }
}