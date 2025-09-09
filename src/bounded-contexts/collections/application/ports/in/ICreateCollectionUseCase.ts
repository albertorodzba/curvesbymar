import {
  CreateCollectionRequestDto
} from "@/bounded-contexts/collections/application/dtos/CreateCollectionRequest.dto";
import {
  CreateCollectionResponseDto
} from "@/bounded-contexts/collections/application/dtos/CreateCollectionResponse.dto";

export interface ICreateCollectionUseCase {
  run(request: CreateCollectionRequestDto): Promise<CreateCollectionResponseDto>;
}
