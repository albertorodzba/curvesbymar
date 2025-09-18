import { Collection } from "@/bounded-contexts/collections/domain/entities/Collection";


export class GetAllCollectionResultDto {
  message: string;
  collections: Collection[];
}
