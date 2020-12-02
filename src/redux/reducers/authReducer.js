import * as actionTypes from '../actions/actionTypes';

const initialState = {
  token: null,
  userId: null,
  isError: null,
  isLoading: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        isError: null,
        isLoading: true,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.payload.idToken,
        userId: action.payload.localId,
        isError: null,
        isLoading: false,
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
      };
    default:
      return state;
  }
};
