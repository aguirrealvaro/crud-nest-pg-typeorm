import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
//import { ValidationPipe } from "./pipes/validation.pipe";
// import { AuthMiddleware } from "./middleware/auth.middleware";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.use(AuthMiddleware); // global middleware
  app.useGlobalPipes(new ValidationPipe()); //global validation pipe
  await app.listen(3000);
}
bootstrap();
