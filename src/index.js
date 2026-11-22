import "./styles/reset.css";
import "./styles/main.css";
import { queryData } from "./modules/queryData.js";
import { getLocation } from "./modules/getLocation.js";

getLocation().then((location) => {
  queryData(location);
});

