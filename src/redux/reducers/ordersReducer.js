import * as actionTypes from '../actions/actionTypes';

const initialState = {
  orders: [],
  isLoading: true,
  isError: false,
};

export const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORDERS_START:
      return {
        isLoading: true,
      };
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        isLoading: false,
      };
    case actionTypes.FETCH_ORDERS_FAIL:
      return {
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
