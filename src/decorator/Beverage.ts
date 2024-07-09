export enum Size {
  TALL,
  GRANDE,
  VENTI,
}

export default abstract class Beverage {
  public size = Size.TALL;
  public description = 'Unknown Beverage';

  public getDescription(): string {
    return this.description;
  }

  public setSize(size: Size): void {
    this.size = size;
  }

  public getSize(): Size {
    return this.size;
  }

  public abstract cost(): number;
}
