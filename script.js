console.log("Weather App Loaded");

const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";
const apikey = "b47a52b2d2650c58f395e2262975a515";

const cityInput = document.querySelector(".inputbox input");
const searchBtn = document.querySelector(".inputbox button");
const weatherIcon = document.querySelector(".weather-img");

// Fetch weather data
async function getdata(city) {
  try {
    const response = await fetch(`${apiurl}${city}&appid=${apikey}&units=metric`);
    const data = await response.json();

    if (data.cod !== 200) {
      alert("❌ City not found!");
      return;
    }

    // Update values
    document.getElementById("temp").innerHTML = `${data.main.temp}°C`;
    document.getElementById("city").innerHTML = data.name;
    document.querySelector(".humidity-val").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind-val").innerHTML = `${data.wind.speed} km/h`;
    document.querySelector(".condition").innerHTML = data.weather[0].main;

    // Update weather icon
    switch (data.weather[0].main) {
      case "Clear":
        weatherIcon.src = "clear.png";
        break;
      case "Clouds":
        weatherIcon.src = "clouds.png";
        break;
      case "Drizzle":
        weatherIcon.src = "drizzle.png";
        break;
      case "Mist":
        weatherIcon.src = "mist.png";
        break;
      case "Rain":
        weatherIcon.src = "rain.png";
        break;
      case "Snow":
        weatherIcon.src = "snow.png";
        break;
      default:
        weatherIcon.src = "clouds.png";
    }
  } catch (err) {
    console.error("Fetch error:", err);
    alert("⚠️ Unable to fetch weather data. Please try again.");
  }
}

// Event listeners
searchBtn.addEventListener("click", () => {
  if (cityInput.value.trim() !== "") {
    getdata(cityInput.value.trim());
  }
});

cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && cityInput.value.trim() !== "") {
    getdata(cityInput.value.trim());
  }
});
