import { Module } from '@nestjs/common';

import { ProviderModule } from '../providers/provider.module';

import { ControllerAdapter } from './controller/controller.adapter';

@Module({
  imports: [ProviderModule],
  providers: [ControllerAdapter],
  exports: [ControllerAdapter],
})
export class AdapterModule {}
