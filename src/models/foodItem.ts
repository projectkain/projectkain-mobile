export class FoodItem {

  id:        number;
  name:      string;
  price:     number;
  imageUrl:  string;

  constructor(fields: { id: number, name: string, price: number, imageUrl: string }) {
    const {
      id,
      name,
      price,
      imageUrl
    } = fields;

    this.id       = id;
    this.name     = name;
    this.price    = price;
    this.imageUrl = imageUrl;

  }

}
