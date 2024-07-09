import { Pizza } from '../pizza';

export abstract class PizzaStore {
  protected abstract createPizza(type: string): Pizza;

  public orderPizza(type: string): Pizza {
    const pizza = this.createPizza(type);

    console.log(`--- Making a ${pizza.getName()} ---`);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}
