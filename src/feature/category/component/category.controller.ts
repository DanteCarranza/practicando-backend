import {
  Controller,
  Get,
  Header,
  Param,
  Query,
  Post,
  Body,
  Req
} from '@nestjs/common';
import { CategoryDto } from '../dto/category.dto';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { FindallCategoryService } from '../service/findall-category.service';

@Controller('category')
export class CategoryController {
  constructor(
    private readonly FindallCategoryService: FindallCategoryService
  ) {}
  @Get()
  async findAllCategories(): Promise<CategoryDto[]> {
    const response = await this.FindallCategoryService.getAllCategories();
    return response;
  }

  //@Query filtrar datos nombre=asc, descripcion: desc, page:0,
  //oder: asc
  @Get('query')
  findCategoryFiltering(@Req() req, @Query() categoryDto: CategoryDto): string {
    console.log(req);
    return `find category with data ${JSON.stringify(categoryDto)}`;
  }

  //@Param Cuando queremos recuperar un objeto especifico
  @Get(':id')
  async findCategoryById(@Param('id') id: number): Promise<CategoryDto> {
    return await this.FindallCategoryService.getCategoryById(id);
  }

  @Post()
  saveCategory(
    @Req() req,
    @Body() createCategoryDto: CreateCategoryDto
  ): string {
    console.log(req);
    return `saving category with data ${JSON.stringify(createCategoryDto)}`;
  }
}
