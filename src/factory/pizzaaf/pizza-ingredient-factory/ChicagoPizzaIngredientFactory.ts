import { Dough, Sauce, Cheese, Veggies, Pepperoni, Clams, PizzaIngredientFactory } from '../interfaces';

import {
  BlackOlives,
  Eggplant,
  FrozenClams,
  PlumTomatoSauce,
  SlicedPepperoni,
  Spinach,
  ThickCrustDough,
} from './ingredients';
import MozzarellaCheese from './ingredients/MozzarellaCheese';

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThickCrustDough();
  }

  createSauce(): Sauce {
    return new PlumTomatoSauce();
  }

  createCheese(): Cheese {
    return new MozzarellaCheese();
  }

  createVeggies(): Veggies[] {
    const veggies: Veggies[] = [new BlackOlives(), new Spinach(), new Eggplant()];

    return veggies;
  }

  createPepperoni(): Pepperoni {
    return new SlicedPepperoni();
  }

  createClam(): Clams {
    return new FrozenClams();
  }
}
