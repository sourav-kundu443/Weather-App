// q={city name}&appid={API key}



const weatherApi = {
    key: "b80fa7646995995ae6d7681c8588f5d3",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather?"
}

// Event Listner function on keypress

const searchInputBox = document.getElementById("input-box");

searchInputBox.addEventListener("keypress", (event) => {
    if(event.keyCode == 13){
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        searchInputBox.value = "";
    }
});

// Get Weather report

const getWeatherReport = (city) =>{
     fetch(`${weatherApi.baseUrl}q=${city}&appid=${weatherApi.key}&units=metric`)
     .then(weather =>{
         return weather.json();
     }).then(showWeatherReport);
}

// Show Weather Report 

const showWeatherReport = (weather) => {
    console.log(weather);

    let city = document.getElementById("city");
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById("temp");
    temperature.innerHTML =  `${Math.round(weather.main.temp)}&deg;C`;

    let minmaxTemp = document.getElementById("min-max");
    minmaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C(Min) / ${Math.ceil(weather.main.temp_max)}&deg;C(Max)`

    let windSpeed = document.getElementById("wind");
    windSpeed.innerHTML = `Wind speed: ${weather.wind.speed}Km\hr`;
}