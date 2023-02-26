import { IsString, MinLength, IsUrl } from 'class-validator';

export class CreatePlanetDto {
  @IsString()
  @MinLength(4)
  name: string;

  @IsUrl()
  image: string;
}
