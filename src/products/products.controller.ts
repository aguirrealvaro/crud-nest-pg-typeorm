import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { DeleteResult, UpdateResult } from "typeorm";
import { CreateProductDto, UpdateProductDto } from "./products.dto";
import { ProductsEntity } from "./products.entity";
import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async findAll(): Promise<ProductsEntity[]> {
    return this.productsService.findAll();
  }

  @Get("/:id")
  async findOne(@Param("id", ParseIntPipe) id: number): Promise<ProductsEntity> {
    return this.productsService.findOne(id);
  }

  @Post()
  // @UsePipes(new ValidationPipe())
  // Parameter-scoped pipes are useful when the validation logic concerns only one specified parameter.
  // No need to add the pipe here because it is globally enabled on main.ts
  async create(
    //@Body(new ValidationPipe()) body: CreateProductDto
    @Body() body: CreateProductDto
  ): Promise<ProductsEntity> {
    return this.productsService.create(body);
  }

  @Put("/:id")
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() body: UpdateProductDto
  ): Promise<UpdateResult> {
    return this.productsService.update(id, body);
  }

  @Delete("/:id")
  async delete(@Param("id", ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.productsService.delete(id);
  }
}
