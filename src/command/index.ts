import { Command } from './interfaces';
import { LighOnCommand, NoCommand, LighOffCommand } from './commands';
import { Light } from './devices';

class RemoteControl {
  onCommands: Array<Command>;
  offCommands: Array<Command>;

  constructor() {
    this.onCommands = new Array(7);
    this.offCommands = new Array(7);

    const noCommand = new NoCommand();

    for (let i = 0; i < 7; i++) {
      this.onCommands[i] = noCommand;
      this.offCommands[i] = noCommand;
    }
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command): void {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  onButtonWasPushed(slot: number): void {
    this.onCommands[slot].execute();
  }

  offButtonWasPushed(slot: number): void {
    this.offCommands[slot].execute();
  }

  toString(): string {
    let result = '\n------ Remote Control -------\n';

    for (let i = 0; i < this.onCommands.length; i++) {
      const onCommandName = (this.onCommands[i].constructor ).name;
      const offCommandName = (this.offCommands[i].constructor).name;

      result += `[slot ${i}] ${onCommandName}   ${offCommandName}\n`;
    }

    return result;
  }
}

class RemoteControlTest {
  static main() {
    const remoteControl = new RemoteControl();

    const livingRoomLight = new Light('Living Room');

    const livingRoomLightOn = new LighOnCommand(livingRoomLight);
    const livingRoomLightOff = new LighOffCommand(livingRoomLight);

    const kitchenLight = new Light('Kitchen');

    const kitchenLightOn = new LighOnCommand(kitchenLight);
    const kitchenLightOff = new LighOffCommand(kitchenLight);

    remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
    remoteControl.setCommand(1, kitchenLightOn, kitchenLightOff);

    console.log(remoteControl.toString());
  }
}

RemoteControlTest.main();
