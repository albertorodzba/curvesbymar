import { PartialType } from '@nestjs/mapped-types';
import { CreateProductRequestDto } from './CreateProductRequest.dto';

export class CreateProductResponseDto extends PartialType(CreateProductRequestDto) {}
