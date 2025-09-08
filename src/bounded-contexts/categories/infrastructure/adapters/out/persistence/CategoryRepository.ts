import { ICategoryRepository } from "../../../../domain/ports/out/ICategoryRepository";
import { Category } from "../../../../domain/entities/Category";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategorytEntity } from "../../../entities/Category.entity";
import { In, Repository } from "typeorm";

@Injectable()
export class CategoryRepository implements ICategoryRepository {

  constructor(@InjectRepository(CategorytEntity) private readonly categoryRepository: Repository<CategorytEntity> ) {
  }

  async getAll(): Promise<Category[]> {
    const categories: CategorytEntity[] = await this.categoryRepository.find();
    return categories.map((category: CategorytEntity): Category => category.toDomainEntity(category));
  }

  async findBy(id: number[]): Promise<Category[]> {
    const categories: CategorytEntity[] = await this.categoryRepository.findBy({ Id: In(id) });
    return categories.map((category: CategorytEntity): Category => category.toDomainEntity(category));
  }

  async findOne(id: number): Promise<Category | null> {
    const category: CategorytEntity | null = await this.categoryRepository.findOne({
      where: {
        Id: id,
      }
    });
    if (category) return category.toDomainEntity(category);
    return null;
  }

  async create(category: Category): Promise<void> {
    const categoryEntity: CategorytEntity = new CategorytEntity();
    categoryEntity.Name = category.name;
    await this.categoryRepository.save(categoryEntity);
  }

}
