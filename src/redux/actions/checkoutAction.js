import * as actionTypes from './actionTypes';
import { axiosFirebase } from '../../axios-orders';

export const purchaseBurgerInit = () => ({
  type: actionTypes.PURCHASE_BURGER_INIT,
});

export const purchaseBurgerStart = () => ({
  type: actionTypes.PURCHASE_BURGER_START,
});

export const purchaseBurgerSuccess = (response) => ({
  type: actionTypes.PURCHASE_BURGER_SUCCESS,
});

export const purchaseBurgerFail = () => ({
  type: actionTypes.PURCHASE_BURGER_FAIL,
});

export const purchaseBurger = (orderData) => async (dispatch) => {
  dispatch(purchaseBurgerStart());
  try {
    const response = await axiosFirebase.post('/orders.json', orderData);
    if (response) {
      dispatch(purchaseBurgerSuccess(response));
    } else {
      dispatch(purchaseBurgerFail());
    }
  } catch (error) {
    dispatch(purchaseBurgerFail());
  }
};
