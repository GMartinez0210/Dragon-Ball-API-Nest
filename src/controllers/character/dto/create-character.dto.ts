import {
  IsString,
  IsNumber,
  IsPositive,
  MinLength,
  IsUrl,
  ValidateNested,
} from 'class-validator';

import { Type } from 'class-transformer';

import { Breed } from 'src/controllers/breed/entities/breed.entity';
import { Planet } from 'src/controllers/planet/entities/planet.entity';
import { Saga } from 'src/controllers/saga/entities/saga.entity';
import { Universe } from 'src/controllers/universe/entities/universe.entity';
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

  @IsNumber({ allowNaN: false })
  @IsPositive()
  power: number;

  @ValidateNested()
  @Type(() => CreateBreedDto)
  breed: Breed;

  @ValidateNested()
  @Type(() => CreateSagaDto)
  saga: Saga;

  @ValidateNested()
  @Type(() => CreatePlanetDto)
  planet: Planet;

  @ValidateNested()
  @Type(() => CreateUniverseDto)
  universe: Universe;
}
