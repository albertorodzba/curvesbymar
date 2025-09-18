import { Module } from '@nestjs/common';
import { CollectionRepository } from "./infrastructure/adapters/out/persistence/CollectionRepository";
import {
  CreateCollectionUseCase
} from "@/bounded-contexts/collections/application/useCases/CreateCollectionUseCase/CreateCollectionUseCase";
import {
  UpdateCollectionUseCase
} from "@/bounded-contexts/collections/application/useCases/UpdateCollectionUseCase/UpdateCollectionUseCase";
import {
  DeleteCollectionUseCase
} from "@/bounded-contexts/collections/application/useCases/DeleteCollectionUseCase/DeleteCollectionUseCase";

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
    },
    {
      provide: "IUpdateCollectionUseCase",
      useClass: UpdateCollectionUseCase,
    },
    {
      provide: "IDeleteCollectionUseCase",
      useClass: DeleteCollectionUseCase,
    }
  ],
  exports: ["ICollectionRepository"],
})
export class CollectionsModule {}
