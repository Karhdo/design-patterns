import { Cheese, Clams, Dough, Pepperoni, Sauce, Veggies } from '../interfaces';

export abstract class Pizza {
  name: string;

  dough: Dough;
  sauce: Sauce;
  veggies: Array<Veggies>;
  cheese: Cheese;
  pepperoni: Pepperoni;
  clam: Clams;

  abstract prepare(): void;

  bake(): void {
    console.log('Bake for 25 minutes at 350');
  }

  cut(): void {
    console.log('Cutting the pizza into diagonal slices');
  }

  box(): void {
    console.log('Place pizza in official PizzaStore box');
  }

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  toString(): string {
    let display = '';

    display += `---- ${this.name} ----\n`;

    if (this.dough) {
      display += `${this.dough.toString()}\n`;
    }

    if (this.sauce) {
      display += `${this.sauce.toString()}\n`;
    }

    if (this.cheese) {
      display += `${this.cheese.toString()}\n`;
    }

    if (this.veggies) {
      for (let i = 0; i < this.veggies.length; i++) {
        display += `${this.veggies[i].toString()}`;

        if (i < this.veggies.length - 1) {
          display += ', ';
        }
      }

      display += '\n';
    }

    if (this.clam) {
      display += `${this.clam.toString()}\n`;
    }

    if (this.pepperoni) {
      display += `${this.pepperoni.toString()}\n`;
    }

    return display;
  }
}
