import * as actionTypes from '../actions/actionTypes';

const initialState = {
  orders: [],
  isLoading: false,
  isSubmitted: false,
  isError: false,
};

export const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGER_INIT:
      return {
        ...state,
        isSubmitted: false,
        isError: false,
      };
    case actionTypes.PURCHASE_BURGER_START:
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSubmitted: true,
        isError: false,
      };
    case actionTypes.PURCHASE_BURGER_FAIL:
      return {
        ...state,
        isLoading: false,
        isSubmitted: true,
        isError: true,
      };
    default:
      return state;
  }
};
