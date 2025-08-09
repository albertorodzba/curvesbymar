import { IProductCatalogRepository } from "../../domain/ports/out/IProductCatalogRepository";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "../Entities/Product.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductCatalogRepository implements IProductCatalogRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ){}

  async findAll(): Promise<any> {
    return await this.productRepository.findBy({ Id: 1 });
  }
}
