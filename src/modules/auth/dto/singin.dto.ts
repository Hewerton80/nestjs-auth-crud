import {IsNotEmpty,IsString} from "class-validator";

export class SinginDto {
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}