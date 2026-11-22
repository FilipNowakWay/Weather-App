import "./styles/reset.css";
import "./styles/main.css";
import "./styles/weather.css";
import { toggleTemp } from "./modules/tempToggle.js";
import { queryData } from "./modules/fetchWeather.js";
import { getLocation } from "./modules/getLocation.js";
import { displayToday } from "./modules/displayData.js";

const inputSearch = document.getElementById("search");
const mainContainer = document.getElementById("weather");

getLocation().then((location) => {
  displayToday(queryData(location));
});

document.getElementById("tempToggleBtn").addEventListener("click", (e) => {
  e.preventDefault();
  toggleTemp();
});

document.getElementById("search-form").addEventListener("submit", (e) => {
  e.preventDefault();
  mainContainer.innerHTML = "";
  displayToday(queryData(inputSearch.value));
});
