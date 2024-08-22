import { Command } from "../interfaces";

export default class NoCommand implements Command {
  execute(): void {
    console.log('No command');
  }
}
