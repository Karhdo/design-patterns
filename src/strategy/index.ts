import { ModelDuck } from './DuckType/ModelDuck';
import { MallardDuck } from './DuckType/MallardDuck';
import { FlyRocketPowered } from './Behavior/FlyBehavior';

class MiniDuckSimulator {
  main(args: Array<string>) {
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
    modelDuck.setFlyBehavior(new FlyRocketPowered());
    modelDuck.performFly();
  }
}

const miniDuckSimulator = new MiniDuckSimulator();

miniDuckSimulator.main(['RUN APPLICATION']);
