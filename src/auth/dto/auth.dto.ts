import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class AuthDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
