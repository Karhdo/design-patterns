import { CeilingFan } from '../devices';
import { Command } from '../interfaces';

export default class CeilingFanOnCommand implements Command {
  ceilingFan: CeilingFan;

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  execute(): void {
    this.ceilingFan.off();
  }

  undo(): void {
    this.ceilingFan.on();
  }
}
