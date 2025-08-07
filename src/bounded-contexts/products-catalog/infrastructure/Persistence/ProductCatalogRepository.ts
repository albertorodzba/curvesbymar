import { IProductCatalogRepository } from "../../domain/Repositories/IProductCatalogRepository";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "../Entities/Product.entity";
import { Repository } from "typeorm";

export class ProductCatalogRepository implements IProductCatalogRepository {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ){}

  async findAll(): Promise<any> {
    return await this.productRepository.findBy({ Id: 1 });
  }
}
