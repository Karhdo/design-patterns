import { CheesePizza, ClamPizza, PepperoniPizza, Pizza, VeggiePizza } from '../pizza';

import { ChicagoPizzaIngredientFactory } from '../pizza-ingredient-factory';

import { PizzaStore } from './PizzaStore';

export class ChicagoPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    let pizza: Pizza = null;

    const ingredientFactory = new ChicagoPizzaIngredientFactory();

    if (type === 'cheese') {
      pizza = new CheesePizza(ingredientFactory);
      pizza.setName('Chicago Style Cheese Pizza');
    } else if (type === 'veggie') {
      pizza = new VeggiePizza(ingredientFactory);
      pizza.setName('Chicago Style Veggie Pizza');
    } else if (type === 'clam') {
      pizza = new ClamPizza(ingredientFactory);
      pizza.setName('Chicago Style Clam Pizza');
    } else if (type === 'pepperoni') {
      pizza = new PepperoniPizza(ingredientFactory);
      pizza.setName('Chicago Style Pepperoni Pizza');
    } else {
      return null;
    }

    return pizza;
  }
}
