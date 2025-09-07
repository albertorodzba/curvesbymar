import { Module } from '@nestjs/common';
import { CategoriesController } from './infrastructure/adapters/in/controllers/categories/categories.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategorytEntity } from "./infrastructure/entities/Category.entity";
import { CategoryRepository } from "./infrastructure/adapters/out/persistence/CategoryRepository";

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
