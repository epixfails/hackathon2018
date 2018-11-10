import { all, fork } from 'redux-saga/effects';
import { watchProfileSettingsSaga } from './features/Profile';
import { watchAddBooksSaga } from './features/BookShelf/BookSearch';
import { watchBooksListSaga } from './features/BookShelf/BooksList';

export function* rootSaga() {
  yield all(
    [watchProfileSettingsSaga, watchAddBooksSaga, watchBooksListSaga].map(
      saga => fork(saga)
    )
  );
}
