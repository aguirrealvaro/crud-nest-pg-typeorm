import { Module } from "@nestjs/common";
import { ConfigurationModule } from "./config/config.module";
import { DatabaseModule } from "./database/database.module";
import { ProductsModule } from "./products/products.module";

@Module({
  imports: [ConfigurationModule, DatabaseModule, ProductsModule],
})
export class AppModule {}

/* export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(ProductsController);
    // apply() can also accepts multiple middlewares
    //.exclude({ path: "products", method: RequestMethod.GET })
    //.forRoutes("products");
    //.forRoutes({ path: 'products', method: RequestMethod.GET })
    //.forRoutes({ path: 'products', method: RequestMethod.ALL })
  }
} */
