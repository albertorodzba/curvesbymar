import { Module } from '@nestjs/common';
import { CategoriesController } from './infrastructure/Controllers/categories/categories.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategorytEntity } from "./infrastructure/Entities/Category.entity";
import { CategoryRepository } from "./infrastructure/Persistence/CategoryRepository";

@Module({
  controllers: [CategoriesController],
  imports: [TypeOrmModule.forFeature([ CategorytEntity ])],
  providers: [
    {
      provide: "ICategoryRepository",
      useClass: CategoryRepository
    },
  ]
})
export class CategoriesModule {}
