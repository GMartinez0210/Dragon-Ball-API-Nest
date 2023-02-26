import { join } from 'path';

import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { ControllerModule } from './controllers/controller.module';
import { UtilModule } from './utils/util.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/dragonBallDB'),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../public'),
    }),
    ControllerModule,
    UtilModule,
    CommonModule,
  ],
})
export class AppModule {}
