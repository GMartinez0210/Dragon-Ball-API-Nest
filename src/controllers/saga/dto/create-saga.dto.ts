import {
  IsString,
  IsNumber,
  IsPositive,
  MinLength,
  IsUrl,
} from 'class-validator';

export class CreateSagaDto {
  @IsString()
  @MinLength(4)
  name: string;

  @IsUrl()
  image: string;

  @IsNumber()
  @IsPositive()
  year: number;

  @IsNumber()
  @IsPositive()
  chapters: number;
}
