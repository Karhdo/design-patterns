import { FlyRocketPowered } from "./FlyBehavior";

import { MallardDuck } from "./MallardDuck";
import { ModelDuck } from "./ModelDuck";

console.log('[LOG]: Demo MallardDuck');

const mallardDuck = new MallardDuck();

mallardDuck.performFly();
mallardDuck.performQuack();
mallardDuck.display();
mallardDuck.swim();

console.log('[LOG]: Demo ModelDuck');

const modelDuck = new ModelDuck();

modelDuck.performQuack();
modelDuck.performFly();
modelDuck.setFlyBehavior(new FlyRocketPowered())
modelDuck.performFly();