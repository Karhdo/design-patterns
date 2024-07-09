import Beverage from './Beverage';

export default abstract class CondimentDecorator extends Beverage {
  beverage: Beverage;

  public abstract getDescription(): string;
}
