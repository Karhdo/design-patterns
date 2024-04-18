import Pizza from './Pizza'; 
import PizzaFactory from './PizzaFactory';

export default class PizzaStore {
  private factory: PizzaFactory;

  constructor(factory: PizzaFactory) {
    this.factory = factory;
  }

  public orderPizza(type: string): Pizza {
    let pizza: Pizza;

    pizza = this.factory.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}
