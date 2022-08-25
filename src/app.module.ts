import { MiddlewareConsumer, Module, NestModule /* RequestMethod */ } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthMiddleware } from "./middleware/auth.middleware";
import { ProductsController } from "./products/products.controller";
import { ProductsEntity } from "./products/products.entity";
import { ProductsModule } from "./products/products.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [ProductsEntity],
      synchronize: !!process.env.DB_SYNC,
    }),
    ProductsModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(ProductsController);
    // apply() can also accepts multiple middlewares
    //.exclude({ path: "products", method: RequestMethod.GET })
    //.forRoutes("products");
    //.forRoutes({ path: 'products', method: RequestMethod.GET })
    //.forRoutes({ path: 'products', method: RequestMethod.ALL })
  }
}
