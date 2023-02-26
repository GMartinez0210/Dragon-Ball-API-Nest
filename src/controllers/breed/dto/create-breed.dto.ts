import { IsString, MinLength, IsUrl } from 'class-validator';

export class CreateBreedDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsUrl()
  image: string;
}
