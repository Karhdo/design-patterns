import Pizza from './Pizza';
import NYStyleCheesePizza from './NYStyleCheesePizza';
import NYStyleVeggiePizza from './NYStyleVeggiePizza';
import NYStyleClamPizza from './NYStyleClamPizza';
import NYStylePepperoniPizza from './NYStylePepperoniPizza';

import PizzaStore from './PizzaStore';

export default class NYPizzaStore extends PizzaStore {
  public createPizza(type: string): Pizza {
    if (type === 'cheese') {
      return new NYStyleCheesePizza();
    } else if (type === 'veggie') {
      return new NYStyleVeggiePizza();
    } else if (type === 'clam') {
      return new NYStyleClamPizza();
    } else if (type === 'pepperoni') {
      return new NYStylePepperoniPizza();
    } else {
      return null;
    }
  }
}
