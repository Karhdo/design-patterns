import { Command } from '../interfaces';
import { Light } from '../devices';

export default class LighOnCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.on();
  }
}
