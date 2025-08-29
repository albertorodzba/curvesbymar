import { ICategoryRepository } from "../../domain/Ports/out/ICategoryRepository";
import { Category } from "../../domain/Entities/Category";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategorytEntity } from "../Entities/Category.entity";
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
    return this.;
  }

}
