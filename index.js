function displayTemperature(response) {
  let currentTemperature = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  currentTemperature.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "40f1f0763f9od6a15t0ca82fb440c4ef";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Nottingham&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
