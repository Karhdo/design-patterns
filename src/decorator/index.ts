import DarkRoast from './Coffee/DarkRoast';
import Espresso from './Coffee/Espresso';
import HouseBlend from './Coffee/HouseBlend';
import Mocha from './Condiment/Mocha';
import Soy from './Condiment/Soy';
import Whip from './Condiment/Whip';

class StarbuzzCoffee {
  main() {
    const beverage = new Espresso();
    console.log(`${beverage.getDescription()} $${beverage.cost()}`);

    let beverage2 = new DarkRoast();
    beverage2 = new Mocha(beverage2);
    beverage2 = new Mocha(beverage2);
    beverage2 = new Whip(beverage2);
    console.log(`${beverage2.getDescription()} $${beverage2.cost()}`);

    let beverage3 = new HouseBlend();
    beverage3 = new Soy(beverage3);
    beverage3 = new Mocha(beverage3);
    beverage3 = new Whip(beverage3);
    console.log(`${beverage3.getDescription()} $${beverage3.cost()}`);
  }
}

const starbuzzCoffee = new StarbuzzCoffee();

starbuzzCoffee.main();
