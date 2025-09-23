import { Collection } from "@/bounded-contexts/collections/domain/entities/Collection";

export class FindOneCollectionResponseDto {
  statusCode: number;
  message?: string;
  data: Collection;
}