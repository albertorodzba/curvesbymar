import { ICategoryRepository } from "../../../domain/ports/out/ICategoryRepository";
import { Category } from "../../../domain/entities/Category";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategorytEntity } from "../../entities/Category.entity";
import { In, Repository } from 'typeorm';

@Injectable()
export class CategoryRepository implements ICategoryRepository {

  constructor(@InjectRepository(CategorytEntity) private readonly categoryRepository: Repository<CategorytEntity> ) {
  }

  async findAll(ids: number[]): Promise<Category[]> {
    const categories: CategorytEntity[] = (await this.categoryRepository.find({
      where: {
        Id: In(ids)
      },
    }));
    return categories.map((category: CategorytEntity): Category => category.toDomainEntity(category));
  }

}
