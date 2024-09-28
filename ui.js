import dewPoint from "./dewPoint.js";
class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.dewPoint = document.getElementById("w-dewpoint");
    this.wind = document.getElementById("w-wind");
  }
  paint(res) {
    const {
      weather,
      main: { temp, feels_like, humidity },
      wind: { speed, deg },
      sys: { country },
      name: city,
    } = res;
    const [items] = weather;
    const { main, description, icon } = items;
    this.location.textContent = `${city} ${country}`;
    this.desc.textContent = description;
    this.string.textContent = `${this.convertFahrenheit(
      temp
    )} °F (${this.convertCelsius(temp)} °C) `;
    this.icon.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${icon}@2x.png`
    );
    this.humidity.textContent = `Relative Humidity: ${humidity}%`;
    const { feelsLikeCelsius, feelsLikeFahrenheit } = this.convertFeelsLike(
      temp,
      humidity,
      speed
    );
    this.feelsLike.textContent = `Feels Like: ${feelsLikeFahrenheit} (${feelsLikeCelsius})`;
    const { dewPointCelsius, dewPointFahrenheit } = dewPoint(temp, humidity);
    this.dewPoint.textContent = `Dew Point: ${dewPointFahrenheit} (${dewPointCelsius})`;
    this.wind.textContent = `Wind Speed is ${speed} With ${deg} degree`;
  }
  convertFahrenheit(temp) {
    return (((temp - 273.15) * 9) / 5 + 32).toFixed(2);
  }
  convertCelsius(temp) {
    return (temp - 273.15).toFixed(2);
  }
  convertFeelsLike = (temp, humidity, windSpeed) => {
    // Convert Kelvin to Celsius
    const celsius = temp - 273.15;

    // Convert Celsius to Fahrenheit
    const fahrenheit = (celsius * 9) / 5 + 32;

    // Calculate "feels like" temperature in Celsius (Heat Index)
    const feelsLikeC =
      humidity > 40
        ? celsius + 0.33 * humidity - 0.7 * windSpeed - 4.0
        : celsius;

    // Calculate "feels like" temperature in Fahrenheit (using original Fahrenheit)
    const feelsLikeF =
      humidity > 40
        ? fahrenheit + 0.33 * humidity - 0.7 * windSpeed - 4.0
        : fahrenheit;

    return {
      feelsLikeCelsius: `${feelsLikeC.toFixed(2)} °C`,
      feelsLikeFahrenheit: `${feelsLikeF.toFixed(2)} °F`,
    };
  };
}
export default UI;
