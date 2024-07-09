import { Cheese } from '../../interfaces';

export default class MozzarellaCheese implements Cheese {
  toString(): string {
    return 'Mozzarella Cheese';
  }
}
