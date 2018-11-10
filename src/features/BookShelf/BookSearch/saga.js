import { takeLatest, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { get } from 'lodash';
import { logout } from '../../../common/utils';
import {
  SET_BOOK_SEARCH,
  SET_SELECTED_BOOK,
  setReceivedSuggestions,
} from './ducks';
import { fetchSuggestionsRequest, setBookSelectedRequest } from './api';

function* searchDataSaga(action) {
  try {
    const { data } = yield call(fetchSuggestionsRequest, action.payload);
    yield put(setReceivedSuggestions(data));
  } catch (e) {
    logout();
    const errorMessage = get(e, 'response.data.message', '');
    console.error(errorMessage);
  }
}

function* setSelectedBookSaga(action) {
  try {
    yield call(setBookSelectedRequest, action.payload);
    yield put(push('/books'));
  } catch (e) {
    logout();
    const errorMessage = get(e, 'response.data.message', '');
    yield put(push('/books'));
    console.error(errorMessage);
  }
}

export function* watchAddBooksSaga() {
  yield takeLatest(SET_BOOK_SEARCH, searchDataSaga);
  yield takeLatest(SET_SELECTED_BOOK, setSelectedBookSaga);
}
