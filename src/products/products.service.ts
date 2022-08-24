import { Injectable } from "@nestjs/common";
import { CreateProductDto, UpdateProductDto } from "./products.dto";
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
    const bodyParsed = {
      ...(body.name && { name: body.name }),
      ...(body.price && { price: body.price }),
    };

    const newProduct: ProductI = {
      id: Math.random().toString(36).slice(2),
      ...bodyParsed,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  update(id: string, body: UpdateProductDto) {
    const productToEditIndex = this.products.findIndex((product) => product.id === id);

    const productToEdit = this.products.find((product) => product.id === id);

    const productEdited: ProductI = { ...productToEdit, ...body };

    this.products.splice(productToEditIndex, 1).push(productEdited);

    return productToEdit;
  }

  delete(id: string) {
    const deletedProductIndex = this.products.findIndex((product) => product.id === id);

    const productToDelete = this.products.find((product) => product.id === id);

    this.products.splice(deletedProductIndex, 1);

    return productToDelete;
  }
}