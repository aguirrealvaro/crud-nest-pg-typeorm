import { Injectable } from "@nestjs/common";

let asd = 2;

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }
}
