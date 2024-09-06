export default class GarageDoor {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  up(): void {
    console.log('Garage door is open');
  }

  down(): void {
    console.log('Garage door is closed');
  }

  stop(): void {
    console.log('Garage door is stopped');
  }

  lightOn(): void {
    console.log('Garage light is on');
  }

  lightOff(): void {
    console.log('Garage light is off');
  }
}
