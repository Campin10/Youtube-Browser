import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Video } from '../db/models/video.entity';
import { VideosController } from './videos.controller';
import { VideosService } from './videos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Video])],
  exports: [TypeOrmModule],
  providers: [VideosService],
  controllers: [VideosController],
})
export class VideosModule {}