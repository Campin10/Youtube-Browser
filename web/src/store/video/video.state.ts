import { VideoState } from "../../types/video.interface";

export const VIDEO_INITIAL_STATE: VideoState = {
    videos: [],
    loading: false,
    success: false,
    error: null,
    deleted: false
  };

export const VIDEO_STORE_NAME: string = 'video'