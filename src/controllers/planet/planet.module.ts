import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CommonModule } from 'src/common/common.module';
import { AdapterModule } from 'src/common/adapters/adapter.module';
import { ProviderModule } from 'src/common/providers/provider.module';

import { PlanetService } from './planet.service';
import { PlanetController } from './planet.controller';
import { Planet, PlanetSchema } from './entities/planet.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Planet.name,
        schema: PlanetSchema,
      },
    ]),
    CommonModule,
    AdapterModule,
    ProviderModule,
  ],
  controllers: [PlanetController],
  providers: [PlanetService],
  exports: [PlanetService],
})
export class PlanetModule {}
