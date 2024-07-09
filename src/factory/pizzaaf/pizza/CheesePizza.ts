import { Pizza } from './Pizza';

import { PizzaIngredientFactory } from '../interfaces';

export class CheesePizza extends Pizza {
  pizzaIngredientFactory: PizzaIngredientFactory;

  constructor(pizzaIngredientFactory: PizzaIngredientFactory) {
    super();
    this.pizzaIngredientFactory = pizzaIngredientFactory;
  }

  prepare(): void {
    console.log('Preparing ' + this.name);

    this.dough = this.pizzaIngredientFactory.createDough();
    this.sauce = this.pizzaIngredientFactory.createSauce();
    this.cheese = this.pizzaIngredientFactory.createCheese();
  }
}
