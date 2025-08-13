import { Collection } from "./Collection";
import { Category } from "./Category";

export class Product {
  readonly id: number;
  name: string;
  details: string;
  colors: string;
  image: string;
  categories: Category[];
  price: number;
  sku: string;
  stock: number;
  collection: Collection;

  constructor(
    colors: string[],
    details: string,
    image: string,
    name: string,
    price: number,
    sku: string,
    stock: number
  ) {
    this.colors   = colors;
    this.details  = details;
    this.image    = image;
    this.name     = name;
    this.price    = price;
    this.sku      = sku;
    this.stock    = stock
  }
}
