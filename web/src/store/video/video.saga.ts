import { call, put, takeLatest } from "redux-saga/effects";
import {
  VideoAction,
  VideosFetchResponseApi,
  VideosResponseApi
} from "../../types/video.interface";
import {
  CREATE_VIDEO_API,
  DELETE_VIDEO_API,
  FETCH_VIDEOS_API,
  UPDATE_VIDEO_API,
  createVideoFailureApi,
  createVideoSuccessApi,
  deleteVideoFailureApi,
  deleteVideoSuccessApi,
  fetchVideosFailureApi,
  fetchVideosSuccessApi,
  updateVideoFailureApi,
  updateVideoSuccessApi,
} from "./video.action";
import videoService from "./video.service";
function* fetchVideosApiCall(): Generator<any> {
  try {
    const response = (yield call(
      videoService.getVideos
    ) as unknown) as VideosFetchResponseApi;
    yield put(fetchVideosSuccessApi(response.data));
  } catch (error: any) {
    yield put(fetchVideosFailureApi(error));
  }
}

function* fetchVideosSaga(): Generator<any> {
  yield takeLatest(FETCH_VIDEOS_API, fetchVideosApiCall);
}

function* createVideoApiCall(action: VideoAction): Generator<any> {
  try {
    const response = (yield call(
      videoService.createVideo,
      action.payload
    ) as unknown) as VideosResponseApi;
    yield put(createVideoSuccessApi(response.data));
  } catch (error: any) {
    yield put(createVideoFailureApi(error));
  }
}

function* createVideoSaga(): Generator<any> {
  yield takeLatest(CREATE_VIDEO_API, createVideoApiCall);
}

function* updateVideoApiCall(action: VideoAction): Generator<any> {
  try {
    const response = (yield call(
      videoService.updateVideo,
      action.payload
    ) as unknown) as VideosResponseApi;
    yield put(updateVideoSuccessApi(response.data));
  } catch (error: any) {
    yield put(updateVideoFailureApi(error));
  }
}

function* updateVideoSaga(): Generator<any> {
  yield takeLatest(UPDATE_VIDEO_API, updateVideoApiCall);
}

function* deleteVideoApiCall(action: VideoAction): Generator<any> {
  try {
    const response = (yield call(
      videoService.deleteVideo,
      action.payload
    ) as unknown) as VideosResponseApi;
    yield put(deleteVideoSuccessApi(response.data));
  } catch (error: any) {
    yield put(deleteVideoFailureApi(error));
  }
}

function* deleteVideoSaga(): Generator<any> {
  yield takeLatest(DELETE_VIDEO_API, deleteVideoApiCall);
}

export {
  createVideoApiCall, deleteVideoApiCall, fetchVideosApiCall, updateVideoApiCall
};
export const videosSaga = [
  fetchVideosSaga(),
  createVideoSaga(),
  updateVideoSaga(),
  deleteVideoSaga(),
];
