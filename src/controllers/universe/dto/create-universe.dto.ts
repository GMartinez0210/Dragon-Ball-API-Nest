import {
  IsString,
  MinLength,
  IsUrl,
  IsNumber,
  IsPositive,
} from 'class-validator';

export class CreateUniverseDto {
  @IsString()
  @MinLength(4)
  name: string;

  @IsUrl()
  image: string;

  @IsNumber()
  @IsPositive()
  number: number;
}
