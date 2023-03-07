import { Module } from '@nestjs/common';
import { CharacterModule } from './character/character.module';
import { PlanetModule } from './planet/planet.module';
import { UniverseModule } from './universe/universe.module';
import { SagaModule } from './saga/saga.module';
import { BreedModule } from './breed/breed.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    CharacterModule,
    PlanetModule,
    UniverseModule,
    SagaModule,
    BreedModule,
    SeedModule,
  ],
  providers: [],
  controllers: [],
})
export class ControllerModule {}
