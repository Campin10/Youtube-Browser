import { Controller, Delete, Get, NotFoundException, Param, Post, Put, Request, Response } from '@nestjs/common';
import { VideosService } from './videos.service';
import { Video } from 'src/db/models/video.entity';
import { DeleteResponseDto, Error400ResponseDto, SuccessResponseDto } from './types/video';
import axios from 'axios';
import ytdl from 'ytdl-core';
import { createWriteStream } from 'fs';

@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}
  @Get()
  async findAll(): Promise<Video[]> {
    return await this.videosService.findAll();
  }
  @Post()
  async create(@Request() req): Promise<Video> {
      return await this.videosService.createOne(req.body);
  }

  @Put()
  update(@Request() req): Promise<Video> {
    return this.videosService.updateOne(req.body);
  }

  @Delete(':uuid')
  delete(@Param('uuid') id: string): DeleteResponseDto | Error400ResponseDto {
    this.videosService.delete(id);
    return { id }
  }
}
