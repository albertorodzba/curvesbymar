import { Product} from "../../../domain/Entities/Product";

export interface ICreateProductUseCase {
  run(product: Product): Promise<void>;
}