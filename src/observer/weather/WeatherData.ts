import Subject from './Subject';
import Observer from './Observer';

export default class WeatherData implements Subject {
  private observers: Array<Observer>;
  private temperature: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    this.observers = new Array<Observer>();
  }

  registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  removeObserver(o: Observer): void {
    this.observers.filter((observer) => observer !== o);
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  }

  measurementsChanged(): void {
    this.notifyObservers();
  }

  setMeasurements(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;

    this.measurementsChanged();
  }
}
