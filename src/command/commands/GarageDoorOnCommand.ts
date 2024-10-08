import { GarageDoor } from '../devices';
import { Command } from '../interfaces';

export default class GarageDoorOnCommand implements Command {
  private garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  execute(): void {
    this.garageDoor.up();
  }
}
