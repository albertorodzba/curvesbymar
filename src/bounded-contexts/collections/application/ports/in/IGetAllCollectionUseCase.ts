import { GetAllCollectionResultDto } from "@/bounded-contexts/collections/application/dtos/GetAllCollectionResult.dto";

export interface IGetAllCollectionUseCase {
  run(): Promise<GetAllCollectionResultDto>;
}