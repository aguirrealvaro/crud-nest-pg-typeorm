import { IsString, IsInt, IsBoolean, IsOptional } from "class-validator";

export class CreateProductDto {
  @IsString()
  name: string;

  @IsInt()
  price: number;

  @IsOptional()
  @IsBoolean()
  available?: boolean;
}

export class UpdateProductDto {
  @IsString()
  name: string;

  @IsInt()
  price: number;

  @IsOptional()
  @IsBoolean()
  available: boolean;
}
