import { Category } from "../../domain/Entities/Category";
import { Collection } from "../../domain/Entities/Collection";

export class CreateProductRequestDto {
  name: string;
  detail: string;
  colors: string;
  price: number;
  imageUrl?: string;
  sku?: string;
  stock?: number;
  categories?: Category[];
  collection?: Collection[];
}
