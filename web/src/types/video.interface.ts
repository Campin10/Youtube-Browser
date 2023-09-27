import { ErrorResponse } from "./response.interface";

export interface Video {
    id: string;
    name: string;
    url: string;
    createAt: number;
    updateAT: number;
}

export interface VideoPayload {
  id?: string;
  name: string;
  url: string;
}

export interface VideoDelete {
    id: string;
}

export interface VideoState {
    videos: Video[];
    loading: boolean;
    error: ErrorResponse | null;
}

export interface VideoAction {
    payload: any;
    type: string;
  }

  export interface VideosFetchResponseApi {
    data: Video[];
  }

  export interface VideosResponseApi {
    data: Video;
  }

  export interface videoForm {
    name: string;
    url: string;
  }
