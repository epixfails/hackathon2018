export const FETCH_BOOKS_LIST = 'bookSearch/FETCH_BOOKS_LIST';
const FETCH_BOOKS_LIST_SUCCESS = 'bookSearch/FETCH_BOOKS_LIST_SUCCESS';

export const fetchUserBooksList = () => ({
  type: FETCH_BOOKS_LIST,
});

export const fetchUserBooksListSuccess = payload => ({
  type: FETCH_BOOKS_LIST_SUCCESS,
  payload,
});

const initialState = [];

export const booksListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_LIST_SUCCESS:
      return [...action.payload];

    default:
      return state;
  }
};
