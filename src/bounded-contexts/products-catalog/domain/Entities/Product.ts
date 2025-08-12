import { Collection } from "./Collection";
import { Category } from "./Category";

export class Product {
  private readonly id: number;
  constructor(
    private categories: Category[],
    private colors: string[],
    private details: string,
    private image: string,
    private name: string,
    private price: number,
    private sku: string,
    private stock: number,
    private collection: Collection,
  ) {}
}
