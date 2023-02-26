import { Module } from '@nestjs/common';
import { ControllerProvider } from './controller-provider/controller.provider';

@Module({
  providers: [ControllerProvider],
  exports: [ControllerProvider],
})
export class ProviderModule {}
