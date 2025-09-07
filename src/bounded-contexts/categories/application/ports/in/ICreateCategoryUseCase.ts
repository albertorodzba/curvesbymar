import { CreateCategoryResponseDto } from "../../dtos/CreateCategoryResponse.dtot";

export interface ICreateCategoryUseCase {
  run(): Promise<CreateCategoryResponseDto>;
}
