import Observer from '../Observer';
import DisplayElement from '../DisplayElement';
import WeatherData from '../WeatherData';

export default class CurrentConditionDisplay implements Observer, DisplayElement {
  private temperature: number;
  private humidity: number;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;

    this.weatherData.registerObserver(this);
  }

  update(): void {
    this.temperature = this.weatherData.getTemperature();
    this.humidity = this.weatherData.getHumidity();

    this.display();
  }

  display(): void {
    console.log(`Current conditions: ${this.temperature} F degrees and ${this.humidity} humidity`);
  }
}
