import { /* Global,  */ Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";

//@Global() // available in all modules
@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  //exports: [ProductsService], //if i want to use products in other modules
})
export class ProductsModule {}
