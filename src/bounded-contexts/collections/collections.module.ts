import { Module } from '@nestjs/common';
import { CollectionRepository } from "./infrastructure/adapters/out/persistence/CollectionRepository";
import {
  CreateCollectionUseCase
} from "@/bounded-contexts/collections/application/useCases/CreateCollectionUseCase/CreateCollectionUseCase";

@Module({
  controllers: [],
  imports: [],
  providers: [
    {
      provide: "ICollectionRepository",
      useClass: CollectionRepository,
    },
    {
      provide: "ICreateCollectionUseCase",
      useClass: CreateCollectionUseCase,
    }
  ],
  exports: ["ICollectionRepository"],
})
export class CollectionsModule {}
