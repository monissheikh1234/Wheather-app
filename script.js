console.log("hello")
//b47a52b2d2650c58f395e2262975a515 api key
//url="https://api.openweathermap.org/data/2.5/weather?q=nagpur&appid=b47a52b2d2650c58f395e2262975a515&units=metric"



 const apiurl= "https://api.openweathermap.org/data/2.5/weather?q=";
 const apikey="b47a52b2d2650c58f395e2262975a515";
const city= document.querySelector(".inputbox input");
const searchbtn=document.querySelector(".inputbox button");
const inpt=document.querySelector(".inputbox input");
const imgchange=document.getElementById("temp");
const wheathericon=document.querySelector(".wheatherimg");


async function getdata(city){
   
    const response=await fetch(apiurl +city+ `&appid=${apikey}`+"&units=metric");
    const data=await response.json();
    console.log(data);
     document.querySelector(".value h1").innerHTML=data.main.temp;
     document.getElementById("city").innerHTML=data.name;
      document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
      document.querySelector(" .wind .contain h2").innerHTML=data.wind.speed+" km/h";

    //  var whethericonval=data.weather[0].main;
    if(data.weather[0].main=="Clear"){
        wheathericon.src="clear.png";
       document.querySelector(".value h3").innerHTML="clear";
    }
    else if(data.weather[0].main=="Clouds"){
        wheathericon.src="clouds.png";
        document.querySelector(".value h3").innerHTML="cloud";
    }
    else if(data.weather[0].main=="Drizzle"){
        wheathericon.src="drizzle.png";
        document.querySelector(".value h3").innerHTML="drizzle";
    }
    else if(data.weather[0].main=="Mist"){
        wheathericon.src="mist.png";
        document.querySelector(".value h3").innerHTML="mist";
        
    }
    else if(data.weather[0].main=="Rain"){
        wheathericon.src="rain.png";
        document.querySelector(".value h3").innerHTML="rain";
    }
    else if(data.weather[0].main=="Snow"){
        wheathericon.src="snow.png";
        document.querySelector(".value h3").innerHTML="snow";
    }

}
// inpt.addEventListener("keypress",()=>{
//     getdata(city.value);
// })
inpt.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getdata(city.value);
  }
});

searchbtn.addEventListener("click",()=>{
    getdata(city.value);
})
// const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";
// const apikey = "b47a52b2d2650c58f395e2262975a515";
// const city = document.querySelector(".inputbox input");
// const searchbtn = document.querySelector(".inputbox button");
// const inpt = document.querySelector(".inputbox input");
// const imgchange = document.getElementById("temp");
// const wheathericon = document.querySelector(".wheatherimg");

// async function getdata(city) {
//   try {
//     const response = await fetch(apiurl + city + `&appid=${apikey}` + "&units=metric");
//     const data = await response.json();
//     console.log(data);

//     document.getElementById("city").innerHTML = data.name;
//     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//     document.querySelector(".wind .contain h2").innerHTML = data.wind.speed + " km/h";

//     if (data.weather[0].main == "Clear") {
//       wheathericon.src = "clear.png";
//     } else if (data.weather[0].main == "Clouds") {
//       wheathericon.src = "clouds.png";
//     } else if (data.weather[0].main == "Drizzle") {
//       wheathericon.src = "C:\Users\Monis Sheikh\.....WEBD\projects🦹🦹🏼‍♂️➡️😙💻\wheather\drizzle.png";
//     } else if (data.weather[0].main == "Mist") {
//       wheathericon.src = "mist.png";
//     } else if (data.weather[0].main == "Rain") {
//       wheathericon.src = "rain.png";
//     } else if (data.weather[0].main == "Snow") {
//       wheathericon.src = "snow.png";
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// inpt.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") {
//     getdata(city.value);
//   }
// });

// searchbtn.addEventListener("click", () => {
//   getdata(city.value);
// });


