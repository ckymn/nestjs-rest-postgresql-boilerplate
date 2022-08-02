import { IsInt, IsString } from "class-validator";

export class CreateCatsDto {
    @IsString()
    readonly name: string;

    @IsInt()
    readonly age: number;

    @IsString()
    readonly breed: string;
}