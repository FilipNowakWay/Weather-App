import "./styles/reset.css";
import "./styles/main.css";
import { toggleTemp } from "./modules/tempToggle.js";
import { queryData } from "./modules/fetchWeather.js";
import { getLocation } from "./modules/getLocation.js";
import { displayToday } from "./modules/displayData.js";


getLocation().then((location) => {
  displayToday(queryData(location));
});

document.getElementById("tempToggleBtn").addEventListener("click", (e) => {
  e.preventDefault();
  toggleTemp();
});

