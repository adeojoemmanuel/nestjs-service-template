import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export default class ImageDTO {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
    imageKey!: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
    userId!: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
    filename!: string;

  @ApiProperty({ type: Number })
  @IsNotEmpty()
  @IsNumber()
    size!: number;
}
