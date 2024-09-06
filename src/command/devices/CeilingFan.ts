export default class CeilingFan {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  on(): void {
    console.log('Ceiling fan is on');
  }

  off(): void {
    console.log('Ceiling fan is off');
  }
}
