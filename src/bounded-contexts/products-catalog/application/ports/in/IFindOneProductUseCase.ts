import { Product } from "../../../domain/Entities/Product";

export interface IFindOneProductUseCase {
  run(id: number): Promise<Product | null>;
}