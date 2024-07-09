import Observer from '../Observer';
import DisplayElement from '../DisplayElement';
import WeatherData from '../WeatherData';

export default class ForecastDisplay implements Observer, DisplayElement {
  private currentPressure = 29.92;
  private lastPressure;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;

    this.weatherData.registerObserver(this);
  }

  update(): void {
    this.lastPressure = this.currentPressure;
    this.currentPressure = this.weatherData.getPressure();

    this.display();
  }

  display(): void {
    if (this.currentPressure > this.lastPressure) {
      console.log('Forecast: Improving weather on the way!');
    } else if (this.currentPressure == this.lastPressure) {
      console.log('Forecast: More of the same');
    } else if (this.currentPressure < this.lastPressure) {
      console.log('Forecast: Watch out for cooler, rainy weather');
    }
  }
}
