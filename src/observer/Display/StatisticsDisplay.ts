import Observer from '../Observer';
import WeatherData from '../WeatherData';
import DisplayElement from '../DisplayElement';

export default class StatisticsDisplay implements Observer, DisplayElement {
  private maxTemp: number = 0.0;
  private minTemp: number = 200;
  private tempSum: number = 0.0;
  private numReadings: number = 0;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;

    this.weatherData.registerObserver(this);
  }

  update(): void {
    const temperature = this.weatherData.getTemperature();

    this.tempSum += temperature;
    this.numReadings++;

    if (temperature > this.maxTemp) {
      this.maxTemp = temperature;
    }

    if (temperature < this.minTemp) {
      this.minTemp = temperature;
    }

    this.display();
  }

  display(): void {
    console.log(`Avg/Max/Min temperature = ${this.tempSum / this.numReadings}/${this.maxTemp}/${this.minTemp}`);
  }
}
