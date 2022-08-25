import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { CreateProductDto, UpdateProductDto } from "./products.dto";
import { ProductsEntity } from "./products.entity";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsEntity)
    private productsRepository: Repository<ProductsEntity>
  ) {}

  findAll(): Promise<ProductsEntity[]> {
    return this.productsRepository.find();
  }

  findOne(id: number): Promise<ProductsEntity> {
    const product = this.productsRepository.findOneBy({ id });

    if (!product) {
      throw new NotFoundException("Product not found");
    }
    return product;
  }

  create(body: CreateProductDto): Promise<ProductsEntity> {
    // alredy validated with ValidationPipe
    /* if (!body.name) {
      // throw new HttpException("name field is required", HttpStatus.BAD_REQUEST);
      throw new BadRequestException("name field is required");
    } */

    return this.productsRepository.save(body);
  }

  async update(id: number, body: UpdateProductDto): Promise<ProductsEntity> {
    await this.productsRepository.update(id, body);
    return this.productsRepository.findOneBy({ id });
  }

  delete(id: number): Promise<DeleteResult> {
    return this.productsRepository.delete(id);
  }
}
