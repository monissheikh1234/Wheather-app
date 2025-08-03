const apiKey = "b47a52b2d2650c58f395e2262975a515";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const input = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const icon = document.querySelector(".icon");
const description = document.querySelector(".description");
const temp = document.querySelector(".temperature");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

async function getWeather(cityName) {
  try {
    const response = await fetch(`${apiUrl}${cityName}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (data.cod !== 200) {
      alert("City not found!");
      return;
    }

    // Update weather info
    temp.innerHTML = `${data.main.temp}°C`;
    city.innerHTML = data.name;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${data.wind.speed} km/h`;

    const weatherMain = data.weather[0].main;

    description.innerHTML = weatherMain;

    switch (weatherMain) {
      case "Clear":
        icon.src = "clear.png";
        break;
      case "Clouds":
        icon.src = "clouds.png";
        break;
      case "Drizzle":
        icon.src = "drizzle.png";
        break;
      case "Mist":
        icon.src = "mist.png";
        break;
      case "Rain":
        icon.src = "rain.png";
        break;
      case "Snow":
        icon.src = "snow.png";
        break;
      default:
        icon.src = "clouds.png";
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

searchBtn.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    getWeather(input.value.trim());
  }
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && input.value.trim() !== "") {
    getWeather(input.value.trim());
  }
});
