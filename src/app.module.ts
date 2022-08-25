import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "./database/database.module";
import { AuthMiddleware } from "./middleware/auth.middleware";
import { ProductsController } from "./products/products.controller";
import { ProductsModule } from "./products/products.module";

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, ProductsModule],
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
