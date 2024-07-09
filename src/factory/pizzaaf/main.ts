import { PizzaStore, NYPizzaStore, ChicagoPizzaStore } from './pizza-store';

class PizzaTestDrive {
  public static main(): void {
    const nyStore: PizzaStore = new NYPizzaStore();
    const chicagoStore: PizzaStore = new ChicagoPizzaStore();

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
    pizza = chicagoStore.orderPizza('cheese');
    console.log(`==> Joel ordered a ${pizza.getName()} Pizza\n`);

    pizza = chicagoStore.orderPizza('veggie');
    console.log(`==> Joel ordered a ${pizza.getName()} Pizza\n`);

    pizza = chicagoStore.orderPizza('clam');
    console.log(`==> Joel ordered a ${pizza.getName()} Pizza\n`);

    pizza = chicagoStore.orderPizza('pepperoni');
    console.log(`==> Joel ordered a ${pizza.getName()} Pizza\n`);
  }
}

PizzaTestDrive.main();
