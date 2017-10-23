

import { FoodItem } from './foodItem';

export class Menu {

  id:   number;
  content: FoodItem[];

  constructor(fields: { id: number, content: FoodItem[] }) {
    const { id, content } = fields;

    this.id      = id;
    this.content = content;
  }

}
