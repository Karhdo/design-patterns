import { FlyBehavior } from './Behavior/FlyBehavior'
import { QuackBehavior } from './Behavior/QuackBehavior'

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

  public setFlyBehavior(fb: FlyBehavior): void {
    this.flyBehavior = fb;
  }
  
  public setQuackBehavior(qb: QuackBehavior): void {
    this.quackBehavior = qb;
  }

  public swim(): void {
    console.log("All ducks float, even decoys!");
  }
}
