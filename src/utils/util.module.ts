import { Module } from '@nestjs/common';
import { ProviderModule } from 'src/common/providers/provider.module';

import { MongoService } from './mongo/mongo.service';

@Module({
  imports: [ProviderModule],
  providers: [MongoService],
  exports: [MongoService],
})
export class UtilModule {}
