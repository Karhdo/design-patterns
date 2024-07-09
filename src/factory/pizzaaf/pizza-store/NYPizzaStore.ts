import { CheesePizza, ClamPizza, PepperoniPizza, Pizza, VeggiePizza } from '../pizza';

import { NYPizzaIngredientFactory } from '../pizza-ingredient-factory';

import { PizzaStore } from './PizzaStore';

export class NYPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    let pizza: Pizza = null;

    const ingredientFactory = new NYPizzaIngredientFactory();

    if (type === 'cheese') {
      pizza = new CheesePizza(ingredientFactory);
      pizza.setName('New York Style Cheese Pizza');
    } else if (type === 'veggie') {
      pizza = new VeggiePizza(ingredientFactory);
      pizza.setName('New York Style Veggie Pizza');
    } else if (type === 'clam') {
      pizza = new ClamPizza(ingredientFactory);
      pizza.setName('New York Style Clam Pizza');
    } else if (type === 'pepperoni') {
      pizza = new PepperoniPizza(ingredientFactory);
      pizza.setName('New York Style Pepperoni Pizza');
    } else {
      return null;
    }

    return pizza;
  }
}
