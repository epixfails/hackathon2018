import { takeLatest, put, call, select } from 'redux-saga/effects';
import { get } from 'lodash';
import { FETCH_PROFILE_DATA, fetchProfileSuccess } from './ducks';
import { tokenSelector } from '../../common/selectors';
import { fetchProfileRequest } from './api';

function* profileDataSaga() {
  try {
    const token = yield select(tokenSelector);
    const { data } = yield call(fetchProfileRequest, token);
    yield put(fetchProfileSuccess(data));
  } catch (e) {
    const errorMessage = get(e, 'response.data.message', 'WHAA');
    console.error(errorMessage);
  }
}

export function* watchProfileSettingsSaga() {
  yield takeLatest(FETCH_PROFILE_DATA, profileDataSaga);
}
