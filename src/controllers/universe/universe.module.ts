import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CommonModule } from 'src/common/common.module';
import { AdapterModule } from 'src/common/adapters/adapter.module';
import { ProviderModule } from 'src/common/providers/provider.module';

import { UniverseService } from './universe.service';
import { UniverseController } from './universe.controller';
import { Universe, UniverseSchema } from './entities/universe.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Universe.name,
        schema: UniverseSchema,
      },
    ]),
    CommonModule,
    AdapterModule,
    ProviderModule,
  ],
  controllers: [UniverseController],
  providers: [UniverseService],
  exports: [UniverseService],
})
export class UniverseModule {}
