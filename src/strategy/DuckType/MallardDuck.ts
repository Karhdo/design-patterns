import { Duck } from '../Duck'
import { FlyWithWings } from '../Behavior/FlyBehavior'
import { Quack } from '../Behavior/QuackBehavior'

export class MallardDuck extends Duck {
  constructor() {
    super();

    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
  }

  public display(): void {
    console.log("I'm a Mallard duck");
  }
}
