import * as actionTypes from './actionTypes';
import { axiosFirebaseData } from '../../axios-instance';

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

export const purchaseBurger = (orderData, token) => async (dispatch) => {
  dispatch(purchaseBurgerStart());
  try {
    const response = await axiosFirebaseData.post(
      '/orders.json?auth=' + token,
      orderData
    );
    if (response) {
      dispatch(purchaseBurgerSuccess(response));
    } else {
      dispatch(purchaseBurgerFail());
    }
  } catch (error) {
    dispatch(purchaseBurgerFail());
  }
};
