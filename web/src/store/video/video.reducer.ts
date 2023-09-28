import { createReducer } from "@reduxjs/toolkit";
import { VideoState } from "../../types/video.interface";
import {
  CLEAR_API_RESPONSE,
  CREATE_VIDEO_API,
  CREATE_VIDEO_FAILURE_API,
  CREATE_VIDEO_SUCCESS_API,
  DELETE_VIDEO_API,
  DELETE_VIDEO_FAILURE_API,
  DELETE_VIDEO_SUCCESS_API,
  FETCH_VIDEOS_API,
  FETCH_VIDEOS_FAILURE_API,
  FETCH_VIDEOS_SUCCESS_API,
  UPDATE_VIDEO_API,
  UPDATE_VIDEO_FAILURE_API,
  UPDATE_VIDEO_SUCCESS_API,
} from "./video.action";
import { VIDEO_INITIAL_STATE, VIDEO_STORE_NAME } from "./video.state";

export const videoReducer = createReducer(VIDEO_INITIAL_STATE, (builder) => {
  builder
    .addCase(CLEAR_API_RESPONSE, (state: VideoState) => {
      return {
        ...state,
        loading: false,
        error: null,
        success: false,
        deleted: false
      };
    })
    .addCase(FETCH_VIDEOS_API, (state: VideoState) => {
      return {
        ...state,
        loading: true,
      };
    })
    .addCase(FETCH_VIDEOS_SUCCESS_API, (state, action: any) => {
      return {
        ...state,
        videos: action.payload,
        loading: false,
      };
    })
    .addCase(FETCH_VIDEOS_FAILURE_API, (state, action: any) => {
      return {
        ...state,
        loading: false,
        videos: [],
        error: action.payload,
      };
    })
    .addCase(CREATE_VIDEO_API, (state) => ({
      ...state,
      loading: true,
      error: null,
    }))
    .addCase(CREATE_VIDEO_SUCCESS_API, (state, action: any) => ({
      ...state,
      loading: false,
      success: true,
      videos: [...state.videos, action.payload],
    }))
    .addCase(CREATE_VIDEO_FAILURE_API, (state, action: any) => ({
      ...state,
      loading: false,
      error: action.payload,
    }))
    .addCase(UPDATE_VIDEO_API, (state) => ({
      ...state,
      loading: true,
    }))
    .addCase(UPDATE_VIDEO_SUCCESS_API, (state, action: any) => ({
      ...state,
      loading: false,
      success: true,
      videos: state.videos.map((video) => {
        if (video.id === action.payload.id) {
          return {
            ...video,
            name: action.payload.name,
            url: action.payload.url,
          };
        }
        return video;
      }),
    }))
    .addCase(UPDATE_VIDEO_FAILURE_API, (state, action: any) => ({
      ...state,
      loading: false,
      error: action.payload,
    }))
    .addCase(DELETE_VIDEO_API, (state) => ({
      ...state,
      loading: true,
    }))
    .addCase(DELETE_VIDEO_SUCCESS_API, (state, action: any) => ({
      ...state,
      loading: false,
      deleted: true,
      videos: state.videos.filter((vd) => vd.id !== action.payload.id),
    }))
    .addCase(DELETE_VIDEO_FAILURE_API, (state, action: any) => ({
      ...state,
      loading: false,
      error: action.payload,
    }));
});

export const videoReducerConfig = {
  [VIDEO_STORE_NAME]: videoReducer,
};
