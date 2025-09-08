import { CreateCategoryResponseDto } from "../../dtos/CreateCategoryResponse.dto";
import { CreateCategoryRequestDto} from "../../dtos/CreateCategoryRequest.dto";

export interface ICreateCategoryUseCase {
  run(request: CreateCategoryRequestDto): Promise<CreateCategoryResponseDto>;
}
