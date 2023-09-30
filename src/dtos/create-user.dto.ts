import { IsEmail, IsPhoneNumber, IsString, Length } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @Length(4, 35)
  full_name: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber()
  phone: string;
}
