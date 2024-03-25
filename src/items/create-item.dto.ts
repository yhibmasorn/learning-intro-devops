import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateItemDto{
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber()
    @IsOptional()
    price?: number;

}