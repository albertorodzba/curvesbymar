import {
  FindByIdCollectionResultDto
} from "@/bounded-contexts/collections/application/dtos/FindByIdCollectionResult.dto";

export interface IFindByIdCollectionUseCase {
  run(id: number): Promise<FindByIdCollectionResultDto>
}