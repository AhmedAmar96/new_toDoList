import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Length } from 'class-validator';

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
