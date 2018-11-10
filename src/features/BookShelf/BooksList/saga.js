import { call, put, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import { logout } from '../../../common/utils';
import { FETCH_BOOKS_LIST, fetchUserBooksListSuccess } from './ducks';
import { getBooksListRequest } from './api';

function* fetchBooksListSaga() {
  try {
    const { data } = yield call(getBooksListRequest);
    yield put(fetchUserBooksListSuccess(data));
  } catch (e) {
    logout();
    const errorMessage = get(e, 'response.data.message', '');
    console.error(errorMessage);
  }
}

export function* watchBooksListSaga() {
  yield takeLatest(FETCH_BOOKS_LIST, fetchBooksListSaga);
}
