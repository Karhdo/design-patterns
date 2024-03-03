export default abstract class Beverage {
  public description = 'Unknown Beverage';

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}
