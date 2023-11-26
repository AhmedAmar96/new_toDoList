import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateToDoDTO {
  @IsNumber()
  @IsOptional()
  id: number;

  @ApiProperty({ example: 'play game' })
  @IsString()
  @Length(4, 15)
  title: string;

  @ApiProperty({ example: 'I will play foodball game' })
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty({ example: '22-22' })
  @IsString()
  from: string;

  @ApiProperty({ example: '22-22' })
  @IsString()
  to: string;

  @IsString()
  @IsOptional()
  macAddress: any;
}

export class CreateUserDTO {
  @IsNumber()
  @IsOptional()
  id: number;

  @ApiProperty({ example: 'name' })
  @IsString()
  @Length(5, 45)
  userName: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsPhoneNumber()
  phone: string;

  @ApiProperty()
  @IsString()
  password: string;
}

export class UserLoginDTO {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;
}
