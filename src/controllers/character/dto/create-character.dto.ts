import { IsString, MinLength, IsUrl, ValidateNested } from 'class-validator';

import { Type } from 'class-transformer';

import { CreateBreedDto } from 'src/controllers/breed/dto/create-breed.dto';
import { CreateSagaDto } from 'src/controllers/saga/dto/create-saga.dto';
import { CreatePlanetDto } from 'src/controllers/planet/dto/create-planet.dto';
import { CreateUniverseDto } from 'src/controllers/universe/dto/create-universe.dto';

export class CreateCharacterDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsUrl()
  image: string;

  @ValidateNested()
  @Type(() => CreateBreedDto)
  breed: CreateBreedDto;

  @ValidateNested()
  @Type(() => CreateSagaDto)
  saga: CreateSagaDto;

  @ValidateNested()
  @Type(() => CreatePlanetDto)
  planet: CreatePlanetDto;

  @ValidateNested()
  @Type(() => CreateUniverseDto)
  universe: CreateUniverseDto;
}
