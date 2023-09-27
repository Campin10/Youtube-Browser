import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Video } from '../db/models/video.entity';
import { Error400ResponseDto, SuccessResponseDto } from './types/video';

@Injectable()
export class VideosService {
  constructor(
    @InjectRepository(Video)
    private videoRepository: Repository<Video>,
  ) {}

  findAll(): Promise<Video[]> {
    return this.videoRepository.find();
  }

  findOne(id: string): Promise<Video | null> {
    return this.videoRepository.findOneBy({ id });
  }

  async createOne(video: Video): Promise<Video | null> {
    return this.videoRepository.save(video);
  }

  async updateOne(video: Video): Promise<Video | null> {
    return this.videoRepository.save(video);
  }

  async delete(id: string): Promise<SuccessResponseDto | Error400ResponseDto> {
    try {
      await this.videoRepository.delete(id);
      return { success: true }
    } catch (error) {
      return { error: { message: error}, payload: id}
    }
  }
}
