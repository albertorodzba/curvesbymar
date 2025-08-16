import { ICategoryRepository } from "../../domain/Ports/out/ICategoryRepository";
import { Category } from "../../domain/Entities/Category";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategorytEntity } from "../Entities/Category.entity";

@Injectable()
export class CategoryRepository implements ICategoryRepository {

  constructor(@InjectRepository(CategorytEntity) private readonly ) {
  }
  findById(id: number): Promis<Category> {
    return undefined;
  }

}
