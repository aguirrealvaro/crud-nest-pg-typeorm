import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateProductDto, UpdateProductDto } from "./products.dto";
import { ProductI } from "./products.interfaces";
import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  // @HttpCode(200) // not needed
  async findAll(): Promise<ProductI[]> {
    return this.productsService.findAll();
  }

  @Get("/:id")
  async findOne(@Param("id") id: string): Promise<ProductI> {
    return this.productsService.findOne(id);
  }

  @Post()
  // @UsePipes(new ValidationPipe())
  // Parameter-scoped pipes are useful when the validation logic concerns only one specified parameter.
  // No need to add the pipe here because it is globally enabled on main.ts
  async create(@Body(/* new ValidationPipe() */) body: CreateProductDto): Promise<ProductI> {
    return this.productsService.create(body);
  }

  // if desired, i can use a pipe for the parameter id:
  @Put("/:id")
  async update(
    @Param("id" /* , ParseIntPipe */) id: string,
    @Body() body: UpdateProductDto
  ): Promise<ProductI> {
    return this.productsService.update(id, body);
  }

  @Delete("/:id")
  async delete(@Param("id") id: string): Promise<ProductI> {
    return this.productsService.delete(id);
  }

  // library-specific, not recommended
  /* @Get()
  findAll2(@Response({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK).send("Using library-specific approach");
  } */
}
