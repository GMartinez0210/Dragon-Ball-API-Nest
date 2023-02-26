import { Module } from '@nestjs/common';

import { AdapterModule } from './adapters/adapter.module';
import { ProviderModule } from './providers/provider.module';

@Module({
  imports: [ProviderModule, AdapterModule],
})
export class CommonModule {}
