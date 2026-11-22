export async function queryData(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&iconSet=icons1&elements=add%3Awindspeedmax%2Cremove%3Adew&key=K4AKSMPTH4YM32WTB3DQEKFR6&contentType=json`,
  );
  const weatherData = await response.json();
  return weatherData;
}
