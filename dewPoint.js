// Dew Point (°C) ≈ Temperature (°C) - ((100 - Humidity) / 5)
// const celsius = kelvin - 273.15;
// Temperature: 302.05K - 273.15 (which is approximately 29.9 °C)
// Humidity: 74%
// Temperature - ((100 - 74) / 5)
const dewPoint = (temp, hum) => {
  const celsius = temp - 273.15;
  const fahrenheit = ((temp - 273.15) * 9) / 5 + 32;
  const dc = (celsius - (100 - hum) / 5).toFixed(2);
  const df = (fahrenheit - (100 - hum) / 4.5).toFixed(2);
  return {
    dewPointCelsius: `${dc} °C`,
    dewPointFahrenheit: `${df} °F`,
  };
};
export default dewPoint;
