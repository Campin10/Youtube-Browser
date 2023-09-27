import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { videoReducerConfig } from './video/video.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

export const persistedReducer = persistCombineReducers(persistConfig, {
  ...videoReducerConfig,
});
