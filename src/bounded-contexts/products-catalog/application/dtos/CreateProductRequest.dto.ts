export class CreateProductRequestDto {
  name: string;
  detail: string;
  colors: string;
  price: number;
  imageUrl?: string;
  sku?: string;
  stock?: number;
  categories?: number[];
  collections?: number[];
}
