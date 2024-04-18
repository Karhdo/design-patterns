export default abstract class Pizza {
  protected name: string;
  protected dough: string;
  protected sauce: string;
  protected toppings = new Array<string>();

  public getName(): string {
    return this.name;
  }

  public prepare(): void {
    console.log(`Preparing ${this.name}`);
  }

  public bake(): void {
    console.log(`Baking ${this.name}`);
  }

  public cut(): void {
    console.log(`Cutting ${this.name}`);
  }

  public box(): void {
    console.log(`Boxing ${this.name}`);
  }

  public toString(): string {
    let display: string = `---- ${this.name} ----\n`;

    display += `${this.dough}\n`;
    display += `${this.sauce}\n`;

    this.toppings.forEach((topping) => {
      display += `${topping}\n`;
    });

    return display;
  }
}
