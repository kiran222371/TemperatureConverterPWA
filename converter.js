// converter.js

document.addEventListener("DOMContentLoaded", () => {
  const inputTemp = document.getElementById("input-temp");
  const inputUnit = document.getElementById("input-unit");
  const outputUnit = document.getElementById("output-unit");
  const outputTemp = document.getElementById("output-temp");

  function convertTemperature() {
    const value = parseFloat(inputTemp.value);
    const from = inputUnit.value;
    const to = outputUnit.value;
    let celsius;

    if (isNaN(value)) {
      outputTemp.textContent = "Invalid input";
      return;
    }

    // Step 1: convert from the source unit to Celsius
    if (from === "c") celsius = value;
    else if (from === "f") celsius = (value - 32) * 5 / 9;
    else if (from === "k") celsius = value - 273.15;

    // Step 2: convert Celsius to the desired unit
    let result;
    if (to === "c") result = celsius;
    else if (to === "f") result = (celsius * 9 / 5) + 32;
    else if (to === "k") result = celsius + 273.15;

    outputTemp.textContent = result.toFixed(2) + " " + to.toUpperCase();
  }

  // Add event listeners
  inputTemp.addEventListener("input", convertTemperature);
  inputUnit.addEventListener("change", convertTemperature);
  outputUnit.addEventListener("change", convertTemperature);

  // Run once at start
  convertTemperature();
});
