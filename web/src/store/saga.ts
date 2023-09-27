import { all } from 'redux-saga/effects';

import { videosSaga } from './video/video.saga';

export function* saga(): Generator<any> {
  yield all([
    ...videosSaga,
  ]);
}
