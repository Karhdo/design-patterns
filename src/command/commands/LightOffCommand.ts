import { Command } from '../interfaces';
import { Light } from '../devices';

export default class LighOffCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.off();
  }
}
