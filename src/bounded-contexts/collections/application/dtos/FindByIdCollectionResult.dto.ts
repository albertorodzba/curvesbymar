import { Collection } from "@/bounded-contexts/collections/domain/entities/Collection";

export class FindByIdCollectionResultDto {
  message: string;
  collection: Collection;
}