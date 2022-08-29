import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
//import { ValidationPipe } from "./pipes/validation.pipe";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // global middleware, only works with a functional middleware https://docs.nestjs.com/middleware#functional-middleware
  //app.use(AuthMiddleware);
  app.useGlobalPipes(new ValidationPipe()); //global validation pipe
  await app.listen(3000);
}
bootstrap();
