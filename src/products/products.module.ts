import { /* Global,  */ Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsController } from "./products.controller";
import { ProductEntity } from "./products.entity";
import { ProductsService } from "./products.service";

//@Global() // available in all modules
@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductsController],
  providers: [ProductsService],
  //exports: [ProductsService, TypeOrmModule], //if i want to use products in other modules
})
export class ProductsModule {}
