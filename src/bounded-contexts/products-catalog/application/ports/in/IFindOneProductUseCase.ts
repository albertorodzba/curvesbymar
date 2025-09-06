import { Product } from "../../../domain/entities/Product";

export interface IFindOneProductUseCase {
  run(id: number): Promise<Product | null>;
}
