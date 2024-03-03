import Beverage from '../Beverage';
import CondimentDecorator from '../CondimentDecorator';

export default class SteamedMilk extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();

    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ', Steamed Milk';
  }

  public cost(): number {
    return this.beverage.cost() + 0.1;
  }
}
