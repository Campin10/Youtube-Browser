import { ErrorResponse } from '../../types/response.interface';
import { Video, VideoDelete, VideoPayload } from '../../types/video.interface';

export const FETCH_VIDEOS_API = 'FETCH_VIDEOS_API';
export const FETCH_VIDEOS_SUCCESS_API = 'FETCH_VIDEOS_SUCCESS_API';
export const FETCH_VIDEOS_FAILURE_API = 'FETCH_VIDEOS_FAILURE_API';

export const CREATE_VIDEO_API = 'CREATE_VIDEO_API';
export const CREATE_VIDEO_SUCCESS_API = 'CREATE_VIDEO_SUCCESS_API';
export const CREATE_VIDEO_FAILURE_API = 'CREATE_VIDEO_FAILURE_API';

export const UPDATE_VIDEO_API = 'UPDATE_VIDEO_API';
export const UPDATE_VIDEO_SUCCESS_API = 'UPDATE_VIDEO_SUCCESS_API';
export const UPDATE_VIDEO_FAILURE_API = 'UPDATE_VIDEO_FAILURE_API';

export const DELETE_VIDEO_API = 'DELETE_VIDEO_API';
export const DELETE_VIDEO_SUCCESS_API = 'DELETE_VIDEO_SUCCESS_API';
export const DELETE_VIDEO_FAILURE_API = 'DELETE_VIDEO_FAILURE_API';

export const CLEAR_API_RESPONSE = 'CLEAR_API_RESPONSE';

export const fetchVideos = (): { type: string } => {
  return { type: FETCH_VIDEOS_API };
};
export const fetchVideosSuccessApi = (
  payload: Video[]
): { payload: Video[]; type: string } => {
  return { type: FETCH_VIDEOS_SUCCESS_API, payload };
};
export const fetchVideosFailureApi = (
  payload: ErrorResponse
): { payload: ErrorResponse; type: string } => {
  return { type: FETCH_VIDEOS_FAILURE_API, payload };
};

export const clearResponse = (): { type: string } => {
  return { type: CLEAR_API_RESPONSE };
};

export const createVideo = (payload: VideoPayload): { payload: VideoPayload, type: string } => {
  return { type: CREATE_VIDEO_API, payload };
};

export const createVideoSuccessApi = (
  payload: Video
): { payload: Video; type: string } => {
  return { type: CREATE_VIDEO_SUCCESS_API, payload };
};
export const createVideoFailureApi = (
  payload: ErrorResponse
): { payload: ErrorResponse; type: string } => {
  return { type: CREATE_VIDEO_FAILURE_API, payload };
};

export const updateVideo = (payload: Video): { payload: Video, type: string } => {
  return { type: UPDATE_VIDEO_API, payload };
};
export const updateVideoSuccessApi = (
  payload: Video
): { payload: Video; type: string } => {
  return { type: UPDATE_VIDEO_SUCCESS_API, payload };
};
export const updateVideoFailureApi = (
  payload: ErrorResponse
): { payload: ErrorResponse; type: string } => {
  return { type: UPDATE_VIDEO_FAILURE_API, payload };
};

export const deleteVideo = (payload: VideoDelete): { payload: VideoDelete, type: string } => {
  return { type: DELETE_VIDEO_API, payload };
};
export const deleteVideoSuccessApi = (
  payload: VideoDelete
): { payload: VideoDelete; type: string } => {
  return { type: DELETE_VIDEO_SUCCESS_API, payload };
};
export const deleteVideoFailureApi = (
  payload: ErrorResponse
): { payload: ErrorResponse; type: string } => {
  return { type: DELETE_VIDEO_FAILURE_API, payload };
};
