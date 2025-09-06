import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";

@Controller('categories')
export class CategoriesController {

  @Post()
  async create(@Body() request: any): Promise<any> {}

  @Get()
  async findAll(): Promise<any[]> {}

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<any> {}

  @Patch(":id")
  async update(@Param("id") id: string, @Body() request: any): Promise<any> {}

  @Delete(":id")
  async remove(@Param("id") id: string): Promise<any> {}
}
