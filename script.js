const apiKey = "ff23ba4b0cb3c26b2600b066e1b696da";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search i");
const weatherImg = document.querySelector(".weather-img");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather-info").style.display = "none";
  } else {
    let data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    if (data.weather[0].main === "Clouds") {
      weatherImg.src = "images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
      weatherImg.src = "images/clear.png";
    } else if (data.weather[0].main === "Rain") {
      weatherImg.src = "images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherImg.src = "images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      weatherImg.src = "images/mist.png";
    }
    document.querySelector(".weather-info").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});