import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from "@nestjs/common";
import { IGetAllCollectionUseCase } from '@/bounded-contexts/collections/application/ports/in/IGetAllCollectionUseCase';
import {
  IFindByIdCollectionUseCase
} from '@/bounded-contexts/collections/application/ports/in/IFindByIdCollectionUseCase';
import { ICreateCollectionUseCase } from "@/bounded-contexts/collections/application/ports/in/ICreateCollectionUseCase";
import { IUpdateCollectionUseCase } from '@/bounded-contexts/collections/application/ports/in/IUpdateCollectionUseCase';
import { IDeleteCollectionUseCase } from '@/bounded-contexts/collections/application/ports/in/IDeleteCollectionUseCase';
import {
  CreateCollectionRequestDto
} from '@/bounded-contexts/collections/infrastructure/dtos/CreateCollectionRequest.dto';
import {
  CreateCollectionResponseDto
} from "@/bounded-contexts/collections/infrastructure/dtos/CreateCollectionResponse.dto";
import { CreateCollectionResultDto } from '@/bounded-contexts/collections/application/dtos/CreateCollectionResult.dto';
import {
  CreateCollectionCommandDto
} from '@/bounded-contexts/collections/application/dtos/CreateCollectionCommand.dto';
import {
  GetAllCollectionResponseDto
} from '@/bounded-contexts/collections/infrastructure/dtos/GetAllCollectionResponse.dto';
import { GetAllCollectionResultDto } from '@/bounded-contexts/collections/application/dtos/GetAllCollectionResult.dto';
import {
  FindOneCollectionResponseDto
} from '@/bounded-contexts/collections/infrastructure/dtos/FindOneCollectionResponse.dto';
import {
  FindByIdCollectionResultDto
} from '@/bounded-contexts/collections/application/dtos/FindByIdCollectionResult.dto';
import {
  UpdateCollectionRequestDto
} from '@/bounded-contexts/collections/infrastructure/dtos/UpdateCollectionRequest.dto';
import {
  UpdateCollectionResponseDto
} from '@/bounded-contexts/collections/infrastructure/dtos/UpdateCollectionResponse.dto';
import { UpdateCollectionCommandDto } from "@/bounded-contexts/collections/application/dtos/UpdateCollectionCommand.dto";
import { UpdateCollectionResultDto } from '@/bounded-contexts/collections/application/dtos/UpdateCollectionResult.dto';
import { DeleteCollectionCommand } from '@/bounded-contexts/collections/application/dtos/DeleteCollectionCommand.dto';
import {
  DeleteCollectionResponseDto
} from '@/bounded-contexts/collections/infrastructure/dtos/DeleteCollectionResponse.dto';
import { DeleteCollectionResultDto } from '@/bounded-contexts/collections/application/dtos/DeleteCollectionResult.dto';

@Controller("collections")
export class CollectionController {
  constructor(
    @Inject("IGetAllCollectionUseCase") private readonly getAllCollectionUseCase: IGetAllCollectionUseCase,
    @Inject("IFindByIdCollectionUseCase") private readonly findByIdUseCase: IFindByIdCollectionUseCase,
    @Inject("ICreateCollectionUseCase") private readonly createCollectionUseCase: ICreateCollectionUseCase,
    @Inject("IUpdateCollectionUseCase") private readonly updateCollectionUseCase: IUpdateCollectionUseCase,
    @Inject("IDeleteCollectionUseCase") private readonly deleteCollectionUseCase: IDeleteCollectionUseCase,
  ) {}

  @Post()
  async create(@Body() request: CreateCollectionRequestDto): Promise<CreateCollectionResponseDto> {
    const response: CreateCollectionResponseDto = new CreateCollectionResponseDto();
    const commandUseCase: CreateCollectionCommandDto = new CreateCollectionCommandDto();

    commandUseCase.name = request.name;
    const result: CreateCollectionResultDto = await this.createCollectionUseCase.run(commandUseCase);
    if (result) response.statusCode = 200; response.message = result.message;
    return response;
  }

  @Get()
  async getAll(): Promise<GetAllCollectionResponseDto> {
    const response: GetAllCollectionResponseDto = new GetAllCollectionResponseDto();
    const result: GetAllCollectionResultDto = await this.getAllCollectionUseCase.run();

    response.message = result.message;
    response.data = result.collections;
    return response;
  }


  @Get(":id")
  async findById(@Param("id") id: string): Promise<FindOneCollectionResponseDto> {
    const response: FindOneCollectionResponseDto = new FindOneCollectionResponseDto();

    const result: FindByIdCollectionResultDto = await this.findByIdUseCase.run(Number(id));
    response.message = result.message;
    response.data = result.collection;
    return response;
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() request: UpdateCollectionRequestDto): Promise<UpdateCollectionResponseDto> {
    const command: UpdateCollectionCommandDto = new UpdateCollectionCommandDto();
    command.name = request.name;
    command.id = Number(id);

    const result: UpdateCollectionResultDto = await this.updateCollectionUseCase.run(command);

    const response: UpdateCollectionResponseDto = new UpdateCollectionResponseDto();
    response.statusCode = 200;
    response.message = result.message;
    return response;
  }

  @Delete(":id")
  async remove(@Param("id") id: string): Promise<DeleteCollectionResponseDto> {
    const command: DeleteCollectionCommand = new DeleteCollectionCommand();
    command.id = Number(id);

    const result: DeleteCollectionResultDto = await this.deleteCollectionUseCase.run(command);

    const response: DeleteCollectionResponseDto = new DeleteCollectionResponseDto();
    response.statusCode = 200;
    response.message = result.message ?? "";

    return response;
  }
}