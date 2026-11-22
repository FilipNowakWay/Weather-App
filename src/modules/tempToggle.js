let isCelsius = true;

export function toggleTemp() {
  const todayTemp = document.getElementById("todayTemp");
  const tempValue = document.getElementById("todayTempValue");
  const spanToday = document.getElementById("spanToday");
  const toggleBtn = document.getElementById("tempToggleBtn");
  if (!todayTemp || !tempValue || !spanToday) return;

  const baseCelsius = Number(todayTemp.dataset.celsius);
  if (Number.isNaN(baseCelsius)) return;

  isCelsius = !isCelsius;

  const convertedTemp = isCelsius ? baseCelsius : (baseCelsius * 9) / 5 + 32;

  tempValue.textContent = convertedTemp.toFixed(1);
  spanToday.textContent = isCelsius ? "°C" : "°F";

  if (toggleBtn) {
    toggleBtn.textContent = isCelsius ? "°C" : "°F";
    toggleBtn.setAttribute(
      "aria-label",
      isCelsius ? "Switch to Fahrenheit" : "Switch to Celsius",
    );
  }
}
