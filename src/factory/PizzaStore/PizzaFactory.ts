import Pizza from './Pizza';

import ClamPizza from './ClamPizza';
import CheesePizza from './CheesePizza';
import VeggiePizza from './VeggiePizza';
import PepperoniPizza from './PepperoniPizza';

export default class PizzaFactory {
  public createPizza(type: string): Pizza {
    let pizza: Pizza = null;

    if (type === 'cheese') {
      pizza = new CheesePizza();
    } else if (type === 'pepperoni') {
      pizza = new PepperoniPizza();
    } else if (type === 'clam') {
      pizza = new ClamPizza();
    } else if (type === 'veggie') {
      pizza = new VeggiePizza();
    }

    return pizza;
  }
}
