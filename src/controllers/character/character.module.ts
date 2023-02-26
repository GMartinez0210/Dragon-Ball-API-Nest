import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CharacterService } from './character.service';
import { Character, CharacterSchema } from './entities/character.entity';
import { CharacterController } from './character.controller';

import { CommonModule } from 'src/common/common.module';
import { AdapterModule } from 'src/common/adapters/adapter.module';
import { ProviderModule } from 'src/common/providers/provider.module';
import { UtilModule } from 'src/utils/util.module';

import { BreedModule } from '../breed/breed.module';
import { SagaModule } from '../saga/saga.module';
import { PlanetModule } from '../planet/planet.module';
import { UniverseModule } from '../universe/universe.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Character.name,
        schema: CharacterSchema,
      },
    ]),
    CommonModule,
    AdapterModule,
    ProviderModule,
    UtilModule,
    BreedModule,
    SagaModule,
    PlanetModule,
    UniverseModule,
  ],
  controllers: [CharacterController],
  providers: [CharacterService],
})
export class CharacterModule {}
