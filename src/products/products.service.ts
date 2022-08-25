import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CreateProductDto, UpdateProductDto } from "./products.dto";
import { ProductsEntity } from "./products.entity";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsEntity)
    private productsRepository: Repository<ProductsEntity>
  ) {}

  async findAll(): Promise<ProductsEntity[]> {
    const products = await this.productsRepository.find();
    return products;
  }

  async findOne(id: number): Promise<ProductsEntity> {
    const product = await this.productsRepository.findOneBy({ id });

    if (!product) {
      throw new NotFoundException("Product not found");
    }

    return product;
  }

  async create(body: CreateProductDto): Promise<ProductsEntity> {
    // alredy validated with ValidationPipe
    /* if (!body.name) {
      // throw new HttpException("name field is required", HttpStatus.BAD_REQUEST);
      throw new BadRequestException("name field is required");
    } */

    const newProduct = this.productsRepository.save(body);
    return newProduct;
  }

  async update(id: number, body: UpdateProductDto): Promise<UpdateResult> {
    const product = await this.productsRepository.findOneBy({ id });

    if (!product) {
      throw new NotFoundException("Product not found");
    }

    const editedProduct = await this.productsRepository.update(product, body);
    return editedProduct;
  }

  async delete(id: number): Promise<DeleteResult> {
    const product = await this.productsRepository.findOneBy({ id });

    if (!product) {
      throw new NotFoundException("Product not found");
    }

    const deletedProduct = this.productsRepository.delete(product);
    return deletedProduct;
  }
}
