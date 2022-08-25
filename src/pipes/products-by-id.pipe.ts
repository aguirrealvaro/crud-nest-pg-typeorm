import { PipeTransform, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProductsEntity } from "@/products/products.entity";

@Injectable()
export class ProductsByIdPipe implements PipeTransform {
  constructor(
    @InjectRepository(ProductsEntity)
    private productsRepository: Repository<ProductsEntity>
  ) {}

  async transform(value: number) {
    const product = await this.productsRepository.findOneBy({ id: value });

    if (!product) {
      throw new NotFoundException("Product not found");
    }

    return value;
  }
}
