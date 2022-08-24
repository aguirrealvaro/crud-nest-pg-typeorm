import {
  Body,
  Controller,
  Delete,
  Get,
  //HttpStatus,
  Param,
  Post,
  Put,
  //Response,
} from "@nestjs/common";
import { CreateProductDto, UpdateProductDto } from "./products.dto";
//import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController {
  //constructor(private productsService: ProductsService) {}

  @Get()
  //@HttpCode(200) //not needed
  async findAll(): Promise<string> {
    return "This action returns all products";
  }

  @Get("/:id")
  async findOne(@Param("id") id: string): Promise<string> {
    console.log(typeof id);
    return "This action returns a single product";
  }

  @Post()
  async create(@Body() body: CreateProductDto): Promise<string> {
    console.log(body);
    return "This action creates a product";
  }

  @Put("/:id")
  async update(@Param("id") id: string, @Body() body: UpdateProductDto) {
    console.log(id);
    console.log(body);
    return "This actions updates a product";
  }

  @Delete("/:id")
  async delete(@Param("id") id: string) {
    console.log(id);
    return "This actions deletes a product";
  }

  //library-specific, not recommended
  /* @Get()
  findAll2(@Response({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK).send("Using library-specific approach");
  } */
}
