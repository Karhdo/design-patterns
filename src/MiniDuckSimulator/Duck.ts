import { FlyBehavior } from './FlyBehavior'
import { QuackBehavior } from './QuackBehavior'

export abstract class Duck {
  protected flyBehavior: FlyBehavior | null;
  protected quackBehavior: QuackBehavior | null;

  constructor() {
    this.flyBehavior = null;
    this.quackBehavior = null;
  }

  public abstract display(): void;

  public performFly(): void {
    this.flyBehavior.fly();
  }

  public performQuack(): void {
    this.quackBehavior.quack();
  }

  swim() {
    console.log("All ducks float, even decoys!");
  }
}
