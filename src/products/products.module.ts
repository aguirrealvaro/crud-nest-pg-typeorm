import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsController } from "./products.controller";
import { ProductsEntity } from "./products.entity";
import { ProductsService } from "./products.service";

// @Global() // available in all modules
@Module({
  imports: [TypeOrmModule.forFeature([ProductsEntity])],
  controllers: [ProductsController],
  providers: [ProductsService],
  // exports: [ProductsService, TypeOrmModule], // if i want to use products in other modules
})
export class ProductsModule {}
