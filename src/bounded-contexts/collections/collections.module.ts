import { Module } from '@nestjs/common';
import { CollectionRepository } from "./infrastructure/adapters/out/persistence/CollectionRepository";

@Module({
  controllers: [],
  imports: [],
  providers: [
    {
      provide: "ICollectionRepository",
      useClass: CollectionRepository,
    },
  ],
  exports: ["ICollectionRepository"],
})
export class CollectionsModule {}
