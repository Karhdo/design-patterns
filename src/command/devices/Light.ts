export default class Light {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  on(): void {
    console.log(`Light ${this.name} is on`);
  }

  off(): void {
    console.log(`Light ${this.name} is off`);
  }
}
