import { Collection } from "./Collection";
import { Category } from "./Category";

export class Product {
  readonly id: number;
  name: string;
  detail: string;
  colors: string;
  imageUrl: string;
  categories: Category[];
  price: number;
  sku: string;
  stock: number;
  collection: Collection[];


  constructor(
    name: string,
    detail: string,
    colors: string,
    price: number,
    sku?: string,
    stock?: number,
    collection?: Collection[],
    imageUrl?: string,
    categories?: Category[],
  ) {
    this.name = name;
    this.detail = detail;
    this.colors = colors;
    this.imageUrl = imageUrl ?? "";
    this.price = price;
    this.sku = sku ?? "";
    this.stock = stock ?? 0;
    this.collection = collection ?? [];
    this.categories = categories ?? [];
  }
}
