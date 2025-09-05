import { Collection } from "../../../collections/domain/Entities/Collection";
import { Category } from "../../../categories/domain/Entities/Category";

export class Product {
  readonly id: number;
  name: string;
  detail: string;
  colors: string;
  imageUrl: string;
  categories: Category[];
  unitPrice: number;
  sku: string;
  stock: number;
  collection: Collection[];


  constructor(
    name: string,
    detail: string,
    colors: string,
    unitPrice: number,
    sku: string = "",
    stock: number = 0,
    collection: Collection[] = [],
    imageUrl: string = "",
    categories: Category[] = [],
    id?: number,
  ) {
    if (id) this.id = id;
    this.name = name;
    this.detail = detail;
    this.colors = colors;
    this.imageUrl = imageUrl;
    this.unitPrice = unitPrice;
    this.sku = sku;
    this.stock = stock;
    this.collection = collection;
    this.categories = categories;
  }

  modifyUnitPrice(unitPrice: number) {
    this.unitPrice = unitPrice;
  }
}
