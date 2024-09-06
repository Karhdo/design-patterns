import { GarageDoor } from '../devices';
import { Command } from '../interfaces';

export default class GarageDoorOffCommand implements Command {
  private garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  execute(): void {
    this.garageDoor.down();
  }
}
