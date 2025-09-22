import { Collection } from "typeorm";

export class GetAllCollectionResponseDto {
  statusCode: number;
  message: string;
  data: Collection[];
}