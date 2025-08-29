import { IProductCatalogRepository } from "../../domain/Ports/out/IProductCatalogRepository";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "../Entities/Product.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { Product } from "../../domain/Entities/Product";

@Injectable()
export class ProductCatalogRepository implements IProductCatalogRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ){}

  async findAll(): Promise<Product[]> {
    const products: ProductEntity[] = await this.productRepository.find({
      relations: ["Collections", "Categories"],
    });
    return products.map((product: ProductEntity): Product => ProductEntity.toEntityDomain(product));
  }

  async save(product: Product): Promise<void> {
    const productEntity: ProductEntity = new ProductEntity().fromDomain(product);
    await this.productRepository.save(productEntity);
  }

  async findOne(id: number): Promise<Product> {
    const product: ProductEntity | null = await this.productRepository.findOne({
      where: { Id: id }
    });

    if(product) return ProductEntity.toEntityDomain(product);
  }
}
