export const SET_BOOK_SEARCH = 'bookSearch/SET_BOOK_SEARCH';
const RECEIVE_SUGGESTIONS_SEARCH = 'bookSearch/RECEIVE_SUGGESTIONS_SEARCH';
export const SET_SELECTED_BOOK = 'bookSearch/SET_SELECTED_BOOK';

export const setBookSearch = payload => ({
  type: SET_BOOK_SEARCH,
  payload,
});

export const setReceivedSuggestions = payload => ({
  type: RECEIVE_SUGGESTIONS_SEARCH,
  payload,
});

export const setSelectedBook = payload => ({
  type: SET_SELECTED_BOOK,
  payload,
});

const initialState = {
  suggestions: null,
};

export const addBookSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_SUGGESTIONS_SEARCH: {
      return {
        ...state,
        suggestions: action.payload,
        isLoaded: true,
      };
    }

    default:
      return state;
  }
};
