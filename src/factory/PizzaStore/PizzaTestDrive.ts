import PizzaFactory from './PizzaFactory';
import PizzaStore from './PizzaStore';
import Pizza from './Pizza';

class PizzaTestDrive {
  public static main(): void {
    const factory: PizzaFactory = new PizzaFactory();
    const store: PizzaStore = new PizzaStore(factory);

    let pizza: Pizza = store.orderPizza('cheese');
    console.log(`We ordered a ${pizza.getName()}\n`);
    console.log(pizza.toString());

    pizza = store.orderPizza('veggie');
    console.log(`We ordered a ${pizza.getName()}\n`);
    console.log(pizza.toString());
  }
}

PizzaTestDrive.main();
