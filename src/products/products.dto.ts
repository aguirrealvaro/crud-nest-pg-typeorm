import { IsString, IsInt, IsBoolean, IsOptional, IsNotEmpty } from "class-validator";

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  price: number;

  @IsBoolean()
  @IsOptional()
  available: boolean;
}

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsInt()
  price: number;

  @IsOptional()
  @IsBoolean()
  available: boolean;
}
