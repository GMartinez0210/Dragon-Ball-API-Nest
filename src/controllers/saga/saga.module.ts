import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CommonModule } from 'src/common/common.module';
import { AdapterModule } from 'src/common/adapters/adapter.module';
import { ProviderModule } from 'src/common/providers/provider.module';

import { SagaService } from './saga.service';
import { SagaController } from './saga.controller';
import { Saga, SagaSchema } from './entities/saga.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Saga.name,
        schema: SagaSchema,
      },
    ]),
    CommonModule,
    AdapterModule,
    ProviderModule,
  ],
  controllers: [SagaController],
  providers: [SagaService],
  exports: [SagaService],
})
export class SagaModule {}
