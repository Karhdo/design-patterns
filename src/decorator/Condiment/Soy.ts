import Beverage, { Size } from '../Beverage';
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
    let cost = this.beverage.cost();

    const beverageSize = this.beverage.getSize();

    if (beverageSize === Size.TALL) {
      cost += 0.1;
    } else if (beverageSize === Size.GRANDE) {
      cost += 0.15;
    } else if (beverageSize === Size.VENTI) {
      cost += 0.2;
    }

    return cost;
  }
}
