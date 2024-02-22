import WeatherData from './WeatherData';
import CurrentConditionDisplay from './CurrentConditionDisplay';

export default class WeatherStation {
  main(args: Array<string>) {
    const weatherData = new WeatherData();

    const currentDisplay = new CurrentConditionDisplay(weatherData);

    weatherData.setMeasurements(80, 65, 30.4);
    weatherData.setMeasurements(82, 70, 29.2);
    weatherData.setMeasurements(78, 90, 29.2);
  }
}

const weatherStation = new WeatherStation();

weatherStation.main(['RUN APPLICATION']);
