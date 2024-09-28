class Storage {
  constructor() {
    this.city;
    this.state;
    this.defaultCity = "Kahuta";
    this.defaultState = "Punjab";
  }
  getLocationData() {
    const city = localStorage.getItem("city");
    const state = localStorage.getItem("state");
    if (city && state) {
      this.city = city;
      this.state = state;
    } else {
      this.city = this.defaultCity;
      this.state = this.defaultState;
    }
    return { city: this.city, state: this.state };
  }
  setLocationData(city, state) {
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);
  }
}
export default Storage;
