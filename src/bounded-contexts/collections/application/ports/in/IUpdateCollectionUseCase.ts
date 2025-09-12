import {
  UpdateCollectionRequestDto
} from "@/bounded-contexts/collections/application/dtos/UpdateCollectionRequest.dto";
import {
  UpdateCollectionResponseDto
} from "@/bounded-contexts/collections/application/dtos/UpdateCollectionResponse.dto";

export interface IUpdateCollectionUseCase {
  run(request: UpdateCollectionRequestDto): Promise<UpdateCollectionResponseDto>;
}
