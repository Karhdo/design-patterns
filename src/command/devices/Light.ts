export default class Light {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  on(): void {
    console.log('Light is on');
  }

  off(): void {
    console.log('Light is off');
  }
}
