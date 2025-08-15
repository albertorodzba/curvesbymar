import { CreateProductRequestDto } from "../../DTOs/CreateProductRequest.dto";

export interface ICreateProductUseCase {
  run(product: CreateProductRequestDto): void;
}
