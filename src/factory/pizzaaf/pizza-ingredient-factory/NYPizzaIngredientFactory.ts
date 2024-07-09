import { Dough, Sauce, Cheese, Veggies, Pepperoni, Clams, PizzaIngredientFactory } from '../interfaces';

import {
  FreshClams,
  Garlic,
  MarinaraSauce,
  Mushroom,
  Onion,
  RedPepper,
  ReggianoCheese,
  SlicedPepperoni,
  ThinCrustDough,
} from './ingredients';

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThinCrustDough();
  }

  createSauce(): Sauce {
    return new MarinaraSauce();
  }

  createCheese(): Cheese {
    return new ReggianoCheese();
  }

  createVeggies(): Veggies[] {
    const veggies: Veggies[] = [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];

    return veggies;
  }

  createPepperoni(): Pepperoni {
    return new SlicedPepperoni();
  }

  createClam(): Clams {
    return new FreshClams();
  }
}
