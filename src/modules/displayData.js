export function displayToday(data) {
  data.then(async (weather) => {
    const weatherCr = document.getElementById("weather");

    //location
    const locationH2 = document.createElement("h2");
    locationH2.textContent = weather.resolvedAddress;
    console.log(weather);

    //Weather Img
    const weatherTodayImg = document.createElement("img");
    const iconName = weather.currentConditions.icon;
    console.log(iconName);
    const iconModule = await import(`../assets/icons/${iconName}.png`);
    const iconUrl = iconModule.default;
    weatherTodayImg.src = iconUrl;

    //     //temp
    //     console.log(weather.currentConditions.temp);
    const todayTemp = document.createElement("h1");
    todayTemp.id = "todayTemp";
    todayTemp.dataset.celsius = weather.currentConditions.temp;

    const tempValue = document.createElement("span");
    tempValue.id = "todayTempValue";
    tempValue.textContent = `${weather.currentConditions.temp}`;

    const spanToday = document.createElement("span");
    spanToday.id = "spanToday";
    spanToday.textContent = "°C";

    todayTemp.append(tempValue, spanToday);
    //     //conditions
    //     console.log(weather.currentConditions.conditions);
    //
    //     //feels like
    //     console.log(weather.currentConditions.feelslike);
    //
    //     //sunset at
    //     console.log(weather.currentConditions.sunset);
    //
    //     //desc
    //     console.log(weather.description);
    //
    //     // next 14days array
    //     console.log(weather.days);

    weatherCr.append(locationH2, weatherTodayImg, todayTemp);
  });
}
