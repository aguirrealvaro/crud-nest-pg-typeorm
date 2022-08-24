import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { AuthMiddleware } from "./middleware/auth.middleware";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(AuthMiddleware); //global middleware
  await app.listen(3000);
}
bootstrap();
