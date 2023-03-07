import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';

import {
  Character,
  CharacterSchema,
} from '../character/entities/character.entity';
import { Breed, BreedSchema } from '../breed/entities/breed.entity';
import { Planet, PlanetSchema } from '../planet/entities/planet.entity';
import { Universe, UniverseSchema } from '../universe/entities/universe.entity';
import { Saga, SagaSchema } from '../saga/entities/saga.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Character.name,
        schema: CharacterSchema,
      },
      {
        name: Breed.name,
        schema: BreedSchema,
      },
      {
        name: Planet.name,
        schema: PlanetSchema,
      },
      {
        name: Universe.name,
        schema: UniverseSchema,
      },
      {
        name: Saga.name,
        schema: SagaSchema,
      },
    ]),
  ],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
