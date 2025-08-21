import { ProductEntity } from "../../../infrastructure/Entities/Product.entity";

export interface IFindOneProductUseCase {
  run(id: number): Promise<ProductEntity>;
}