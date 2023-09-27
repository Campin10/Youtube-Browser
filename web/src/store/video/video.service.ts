import axios from "axios";
import Config from "../../config";
import { Video, VideoDelete, VideosResponseApi } from "../../types/video.interface";

class VideoService {
  async getVideos(): Promise<VideosResponseApi> {
    return await axios.get(`${Config.API_URL}/videos`);
  }
  async createVideo(params: Video): Promise<VideosResponseApi> {
    return await axios.post(`${Config.API_URL}/videos`, params);
  }
  async updateVideo(params: Video): Promise<VideosResponseApi> {
    return await axios.put(`${Config.API_URL}/videos`, params);
  }
  async deleteVideo({id}: VideoDelete): Promise<VideoDelete> {
    return await axios.delete(`${Config.API_URL}/videos/${id}`);
  }
}

const instance = new VideoService()
export default instance;
