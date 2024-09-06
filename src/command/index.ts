import { CeilingFan, Light, GarageDoor } from './devices';
import { Command, NamedFunction } from './interfaces';
import {
  NoCommand,
  LighOnCommand,
  LighOffCommand,
  GarageDoorOnCommand,
  GarageDoorOffCommand,
  CeilingFanOnCommand,
  CeilingFanOffCommand,
} from './commands';

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
      const onCommandName = (this.onCommands[i]?.constructor as NamedFunction).name || 'NoCommand';
      const offCommandName = (this.offCommands[i]?.constructor as NamedFunction).name || 'NoCommand';

      result += `[slot ${i}] ${onCommandName}   ${offCommandName}\n`;
    }

    return result;
  }
}

class RemoteControlTest {
  static main() {
    const remoteControl = new RemoteControl();

    const livingRoomLight = new Light('Living Room');
    const kitchenLight = new Light('Kitchen');
    const ceilingFan = new CeilingFan('Living Room');
    const garageDoor = new GarageDoor('Garage');

    const livingRoomLightOn = new LighOnCommand(livingRoomLight);
    const livingRoomLightOff = new LighOffCommand(livingRoomLight);

    const kitchenLightOn = new LighOnCommand(kitchenLight);
    const kitchenLightOff = new LighOffCommand(kitchenLight);

    const ceilingFanOn = new CeilingFanOnCommand(ceilingFan);
    const ceilingFanOff = new CeilingFanOffCommand(ceilingFan);

    const garageDoorUp = new GarageDoorOnCommand(garageDoor);
    const garageDoorDown = new GarageDoorOffCommand(garageDoor);

    remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
    remoteControl.setCommand(1, kitchenLightOn, kitchenLightOff);
    remoteControl.setCommand(2, ceilingFanOn, ceilingFanOff);
    remoteControl.setCommand(3, garageDoorUp, garageDoorDown);

    console.log(remoteControl.toString());

    remoteControl.onButtonWasPushed(0);
    remoteControl.offButtonWasPushed(0);

    remoteControl.onButtonWasPushed(1);
    remoteControl.offButtonWasPushed(1);

    remoteControl.onButtonWasPushed(2);
    remoteControl.offButtonWasPushed(2);

    remoteControl.onButtonWasPushed(3);
    remoteControl.offButtonWasPushed(3);
  }
}

RemoteControlTest.main();
