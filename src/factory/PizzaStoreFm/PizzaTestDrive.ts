import PizzaStore from './PizzaStore';

import NYPizzaStore from './NYPizzaStore';

class PizzaTestDrive {
  public static main(): void {
    const nyStore: PizzaStore = new NYPizzaStore();

    // Ethan orders a new york style pizza
    let pizza = nyStore.orderPizza('cheese');
    console.log(`==> Ethan ordered a ${pizza.getName()} Pizza\n`);

    pizza = nyStore.orderPizza('veggie');
    console.log(`==> Ethan ordered a ${pizza.getName()} Pizza\n`);

    pizza = nyStore.orderPizza('clam');
    console.log(`==> Ethan ordered a ${pizza.getName()} Pizza\n`);

    pizza = nyStore.orderPizza('pepperoni');
    console.log(`==> Ethan ordered a ${pizza.getName()} Pizza\n`);

    // Joel orders a chicago style pizza
  }
}

PizzaTestDrive.main();
