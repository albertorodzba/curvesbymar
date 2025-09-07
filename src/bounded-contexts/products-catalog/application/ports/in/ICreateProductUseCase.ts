import { CreateProductRequestDto } from "../../dtos/CreateProductRequest.dto";
import { CreateProductResponseDto } from "../../dtos/CreateProductResponse.dto";

export interface ICreateProductUseCase {
  run(product: CreateProductRequestDto): Promise<CreateProductResponseDto>;
}
