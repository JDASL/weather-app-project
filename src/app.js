function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = response.data.wind.speed;
}

let apiKey = "6ef2870404e66ed2d6d7e6a9e918298b";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Oslo&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
