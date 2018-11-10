import { takeLatest, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { delay } from 'redux-saga';
import { get } from 'lodash';
import {
  SET_BOOK_SEARCH,
  SET_SELECTED_BOOK,
  setReceivedSuggestions,
} from './ducks';
import { fetchSuggestionsRequest, setBookSelectedRequest } from './api';

function* searchDataSaga(action) {
  try {
    yield call(delay, 500);
    const { data } = yield call(fetchSuggestionsRequest, action.payload);
    yield put(setReceivedSuggestions(data));
  } catch (e) {
    const errorMessage = get(e, 'response.data.message', 'WHAA');
    console.error(errorMessage);
  }
}

function* setSelectedBookSaga(action) {
  try {
    yield call(setBookSelectedRequest, action.payload);
    yield put(push('/books'));
  } catch (e) {
    const errorMessage = get(e, 'response.data.message', 'WHAA');
    yield put(push('/books'));
    console.error(errorMessage);
  }
}

export function* watchAddBooksSaga() {
  yield takeLatest(SET_BOOK_SEARCH, searchDataSaga);
  yield takeLatest(SET_SELECTED_BOOK, setSelectedBookSaga);
}
