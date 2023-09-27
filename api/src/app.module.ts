import { Module } from '@nestjs/common';
import { VideosController } from './videos/videos.controller';
import { VideosModule } from './videos/videos.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from '../config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(databaseConfig()),
    VideosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {}
}
