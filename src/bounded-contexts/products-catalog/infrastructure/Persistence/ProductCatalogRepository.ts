import { IProductCatalogRepository } from "../../domain/Ports/out/IProductCatalogRepository";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "../Entities/Product.entity";
import { Repository } from "typeorm";
import { Injectable, Logger } from "@nestjs/common";
import { Product } from "../../domain/Entities/Product";

@Injectable()
export class ProductCatalogRepository implements IProductCatalogRepository {
  private readonly logger = new Logger(ProductCatalogRepository.name);

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

  async findOne(id: number): Promise<Product | null>{
    const product: ProductEntity | null = await this.productRepository.findOne({
      where: { Id: id }
    });
    this.logger.log(`Product created with id ${id}`);
    if(product) return ProductEntity.toEntityDomain(product);
    return null;
  }

  async save(product: Product): Promise<void> {
    const productEntity: ProductEntity = new ProductEntity().fromDomain(product);
    await this.productRepository.save(productEntity);
  }
}
