import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./products.dto";
import { ProductI } from "./products.interfaces";

@Injectable()
export class ProductsService {
  private readonly products: ProductI[] = [];

  findAll(): ProductI[] {
    return this.products;
  }

  findOne(id: string): ProductI {
    const product = this.products.find((product) => product.id === id);
    return product;
  }

  create(body: CreateProductDto) {
    const newProduct: ProductI = {
      id: crypto.randomUUID(),
      ...body,
    };

    this.products.push(newProduct);

    return newProduct;
  }
}
