import Beverage from '../Beverage';
import CondimentDecorator from '../CondimentDecorator';

export default class Soy extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();

    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ', Soy';
  }

  public cost(): number {
    return this.beverage.cost() + 0.15;
  }
}
