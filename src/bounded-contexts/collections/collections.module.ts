import { Module } from '@nestjs/common';
import { CollectionRepository } from "./infrastructure/Persistence/CollectionRepository";

@Module({
  controllers: [],
  imports: [],
  providers: [
    {
      provide: "ICollectionRepository",
      useClass: CollectionRepository,
    },
  ],
})
export class CollectionsModule {}
