import { MiddlewareConsumer, Module, NestModule /* RequestMethod */ } from "@nestjs/common";
import { AuthMiddleware } from "./middleware/auth.middleware";
import { ProductsController } from "./products/products.controller";
import { ProductsModule } from "./products/products.module";

@Module({
  imports: [ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware) //it can also accepts multiple middlewares
      //.exclude({ path: "products", method: RequestMethod.GET })
      .forRoutes(ProductsController);
    //.forRoutes("products");
    //.forRoutes({ path: 'products', method: RequestMethod.GET })
    //.forRoutes({ path: 'products', method: RequestMethod.ALL })
  }
}
