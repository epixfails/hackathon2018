export const FETCH_PROFILE_DATA = 'profile/FETCH_PROFILE_DATA';
const FETCH_PROFILE_DATA_SUCCESS = 'profile/FETCH_PROFILE_DATA_SUCCESS';

export const fetchProfileData = () => ({
  type: FETCH_PROFILE_DATA,
});

export const fetchProfileSuccess = payload => ({
  type: FETCH_PROFILE_DATA_SUCCESS,
  payload,
});

const initialState = {};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE_DATA_SUCCESS:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};
