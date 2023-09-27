import { createSelector } from "reselect";
import { VideoState } from "../../types/video.interface";
import { VIDEO_STORE_NAME } from "./video.state";

export const getBusinessState = (state: any): VideoState =>
  state[VIDEO_STORE_NAME];

export const getSelectedVideos = createSelector(
  getBusinessState,
  (video: VideoState) => video && video.videos
);

export const getVideoState = createSelector(
  getBusinessState,
  (video: VideoState) => video && video
);
