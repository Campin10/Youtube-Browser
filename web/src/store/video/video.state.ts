import { VideoState } from "../../types/video.interface";

export const VIDEO_INITIAL_STATE: VideoState = {
    videos: [],
    loading: false,
    error: null,
  };

export const VIDEO_STORE_NAME: string = 'video'