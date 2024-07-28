import { WeatherData } from './subject';
import { CurrentConditionDisplay, ForecastDisplay, StatisticsDisplay, HeatIndexDisplay } from './display';

export default class WeatherStation {
  main(args: Array<string>) {
    const weatherData = new WeatherData();

    const currentDisplay = new CurrentConditionDisplay(weatherData);
    const statisticsDisplay = new StatisticsDisplay(weatherData);
    const forecastDisplay = new ForecastDisplay(weatherData);
    const heatIndexDisplay = new HeatIndexDisplay(weatherData);

    weatherData.setMeasurements(80, 65, 30.4);
    weatherData.setMeasurements(82, 70, 29.2);
    weatherData.setMeasurements(78, 90, 29.2);
  }
}

const weatherStation = new WeatherStation();

weatherStation.main(['RUN APPLICATION']);
