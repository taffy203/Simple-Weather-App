function displayTemperature(response) {
  let currentTemperature = document.querySelector("#temperatue");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  currentTemperature.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
}

let apiKey = "40f1f0763f9od6a15t0ca82fb440c4ef";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Nottingham&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
