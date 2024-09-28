import Weather from "./weather.js";
import Storage from "./storage.js";
import UI from "./ui.js";
import dewPoint from "./dewPoint.js";

//INIT UI
const ui = new UI();
//INIT STORAGE
const storage = new Storage();
//GET STORED LOCATION DATA.
const weatherLocation = storage.getLocationData();
//INIT WEATHER
// change location event
// console.log(weatherLocation);
const weather = new Weather(weatherLocation.city, weatherLocation.state);

//GET WEATHER ON DOM LOADED
document.addEventListener("DOMContentLoaded", getWeather);

document.getElementById("w-change-btn").addEventListener("click", () => {
  const cityInput = document.getElementById("city");
  const stateInput = document.getElementById("state");
  const city = cityInput.value;
  const state = stateInput.value;
  //change location
  weather.changeLocation(city, state);
  //set location in local storage
  storage.setLocationData(city, state);
  // get and display weather;
  getWeather();
  //close modal
  $("#locModal").modal("hide");
  //clearing the input
  cityInput.value = "";
  stateInput.value = "";
});

function getWeather() {
  weather
    .getWeather()
    .then((res) => {
      // console.log(res);
      ui.paint(res);
    })
    .catch((err) => {
      // console.log(err);
      return alert("OOP'S something went wrong");
    });
}
