import { CreateProductRequestDto } from "../../DTOs/CreateProductRequest.dto";
import { CreateProductResponseDto } from "../../DTOs/CreateProductResponse.dto";

export interface ICreateProductUseCase {
  run(product: CreateProductRequestDto): CreateProductResponseDto;
}
