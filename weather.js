class Weather {
  constructor(city, state) {
    this.apiKey = "4760909926145fa6c806c0c39e0be62c";
    this.city = city;
    this.state = state;
  }
  // fetch weather from API.
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`
    );
    // console.log(response);
    const responseData = await response.json();
    return responseData;
  }
  //Change weather location.
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
export default Weather;
