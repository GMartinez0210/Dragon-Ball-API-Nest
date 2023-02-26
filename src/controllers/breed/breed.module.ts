import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CommonModule } from 'src/common/common.module';
import { AdapterModule } from 'src/common/adapters/adapter.module';
import { ProviderModule } from 'src/common/providers/provider.module';

import { BreedService } from './breed.service';
import { BreedController } from './breed.controller';
import { Breed, BreedSchema } from './entities/breed.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Breed.name,
        schema: BreedSchema,
      },
    ]),
    CommonModule,
    AdapterModule,
    ProviderModule,
  ],
  controllers: [BreedController],
  providers: [BreedService],
  exports: [BreedService],
})
export class BreedModule {}
