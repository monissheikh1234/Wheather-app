const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";
const apikey = "b47a52b2d2650c58f395e2262975a515";

const cityInput = document.querySelector(".inputbox input");
const searchBtn = document.querySelector(".inputbox button");
const weatherIcon = document.querySelector(".weather-img");

async function getdata(city) {
  try {
    const response = await fetch(`${apiurl}${city}&appid=${apikey}&units=metric`);
    const data = await response.json();

    document.getElementById("temp").innerHTML = `${data.main.temp}°C`;
    document.getElementById("city").innerHTML = data.name;
    document.querySelector(".humidity-val").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind-val").innerHTML = `${data.wind.speed} km/h`;
    document.querySelector(".condition").innerHTML = data.weather[0].main;

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
    alert("❌ City not found!");
    console.error(err);
  }
}

searchBtn.addEventListener("click", () => {
  getdata(cityInput.value);
});

cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getdata(cityInput.value);
  }
});
