
let button = document.getElementById("btn")
let input = document.getElementById("city")
let cityName = document.getElementById("cityName")
let degree = document.getElementById("deg")
let description = document.getElementById("des")
let humidity = document.getElementById("humidity")
let wind = document.getElementById("wind")
let feel = document.getElementById("feel")


async function getWeather(cities) {
    
    let api = 'cdba781032984caca891d7384e62c51b';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=${api}`;
    let response = await fetch(url);
    let data = await response.json();
    if(data.cod==="404"){
        description.textContent = `Location Not found...!`;
    description.style.color="red"
        humidity.textContent="...%"
        wind.textContent="...km/h"
        feel.textContent="...°C"
    cityName.textContent = "...";
    degree.textContent = `...°C`;


    }
    else{
    console.log(data);
    cityName.textContent = data.name;
    degree.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
    description.textContent = data.weather[0].description;
    description.style.color="white"
    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${Math.round(data.wind.speed*3.6)} km/h`;
    feel.textContent = `${Math.round(data.main.feels_like - 273.15)}°C`
    }

}

button.addEventListener("click",()=>{
    let cities = input.value;
    getWeather(cities);
})













// let btn = document.getElementById("btn");
// let input = document.querySelector("input");
// let images = document.getElementsByClassName("images")[0];
// let degree = document.getElementById("deg");
// let description = document.getElementById("des")
// let humidity = document.getElementById("humidity");
// let wind = document.getElementById("wind");

// async function getWeather(cityName) {
//     let api = 'cdba781032984caca891d7384e62c51b';
//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}`;

//     let response = await fetch(url);
//     let data = await response.json();
//     console.log(data);

//     if(data.cod==="404"){
//     description.textContent = `OOPS! Location Not fond...`;
//     description.style.color="red"
//     images.children[0].src="404.png"
//     degree.textContent = `0 °C`;
//     humidity.textContent = `0 %`;
//     wind.textContent = `0 km/h`;
//     }
//     else{
//     description.style.color="#004494"
//     degree.textContent = `${Math.round(data.main.temp-273.15)} °C`;
//     description.textContent = `${data.weather[0].description}`;

//     humidity.textContent = `${data.main.humidity}%`;
//     wind.textContent = `${Math.round(data.wind.speed*3.6)} km/h`;
// if(data.weather[0].main==="Clouds"){
//     images.children[0].src="assets/cloud.jpg"
// }
// else if(data.weather[0].main==="Rain"){
//     images.children[0].src="assets/rain.webp"
// }
// else if(data.weather[0].main==="Clear"){
//     images.children[0].src="assets/clear.jpg"
// }
// else if(data.weather[0].main==="Mist"){
//     images.children[0].src="assets/mist.png"

// }
// else if(data.weather[0].main==="Snow"){
//     images.children[0].src="assets/snow.png"
// }
// else if(data.weather[0].main==="Haze"){
//     images.children[0].src="assets/haze.jpg"
// }
// else{
//     images.children[0].src="assets/else.jpg"
// }

// }
// }
// btn.addEventListener("click", () => {
//     let cityName = input.value;
//     getWeather(cityName);
// });

