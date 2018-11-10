const LOG_IN_SUCCESS = 'auth/LOG_IN_SUCCESS';

export const logInSuccess = payload => ({
  type: LOG_IN_SUCCESS,
  payload,
});

const initialState = {
  authenticated: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        authenticated: true,
      };
    }

    default:
      return state;
  }
};
