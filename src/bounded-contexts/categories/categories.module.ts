import { Module } from '@nestjs/common';
import { CategoriesController } from './infrastructure/adapters/in/controllers/categories/categories.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategorytEntity } from "./infrastructure/entities/Category.entity";
import { CategoryRepository } from "./infrastructure/adapters/out/persistence/CategoryRepository";
import {
  CreateCategoryUseCase
} from "@/bounded-contexts/categories/application/useCases/CreateCategoryUseCase/CreateCategoryUseCase";
import { GetAllUseCase } from "@/bounded-contexts/categories/application/useCases/GetAllUseCase/GetAllUseCase";

@Module({
  controllers: [CategoriesController],
  imports: [TypeOrmModule.forFeature([ CategorytEntity ])],
  providers: [
    {
      provide: "ICategoryRepository",
      useClass: CategoryRepository
    },
    {
      provide: "ICreateCategoryUseCase",
      useClass: CreateCategoryUseCase,
    },
    {
      provide: "IGetAllCategoriesUseCase",
      useClass: GetAllUseCase
    }
  ],
  exports: ["ICategoryRepository"],
})
export class CategoriesModule {}
