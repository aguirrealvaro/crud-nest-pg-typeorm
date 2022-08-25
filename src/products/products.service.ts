import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateProductDto, UpdateProductDto } from "./products.dto";
import { ProductsEntity } from "./products.entity";
import { ProductI } from "./products.interfaces";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsEntity)
    private productsRepository: Repository<ProductsEntity>
  ) {}

  private readonly products: ProductI[] = [];

  findAll(): ProductI[] {
    return this.products;
  }

  findOne(id: string): ProductI {
    const product = this.products.find((product) => product.id === id);
    return product;
  }

  create(body: CreateProductDto) {
    // alredy validated with ValidationPipe
    /* if (!body.name) {
      // throw new HttpException("name field is required", HttpStatus.BAD_REQUEST);
      throw new BadRequestException("name field is required");
    } */

    const newProduct: ProductI = {
      id: Math.random().toString(36).slice(2),
      ...body,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  update(id: string, body: UpdateProductDto) {
    const productToEdit = this.products.find((product) => product.id === id);

    if (!productToEdit) {
      throw new NotFoundException("Product not found");
    }

    const productToEditIndex = this.products.findIndex((product) => product.id === id);

    //delete
    this.products.splice(productToEditIndex, 1);

    //push new edited
    const productEdited: ProductI = { ...productToEdit, ...body };

    this.products.push(productEdited);

    return productEdited;
  }

  delete(id: string) {
    const productToDelete = this.products.find((product) => product.id === id);

    if (!productToDelete) {
      throw new NotFoundException("Product not found");
    }

    const deletedProductIndex = this.products.findIndex((product) => product.id === id);

    this.products.splice(deletedProductIndex, 1);

    return productToDelete;
  }
}
