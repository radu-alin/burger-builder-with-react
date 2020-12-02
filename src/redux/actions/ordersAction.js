import * as actionTypes from './actionTypes';
import { axiosFirebaseData } from '../../axios-instance';

export const fetchOrdersResetSpinner = () => ({
  type: actionTypes.FETCH_ORDERS_RESET_SPINNER,
});

export const fetchOrdersSuccess = (data) => ({
  type: actionTypes.FETCH_ORDERS_SUCCESS,
  payload: data,
});

export const fetchOrdersFail = () => ({
  type: actionTypes.FETCH_ORDERS_FAIL,
});

export const fetchOrders = (token, userId) => async (dispatch) => {
  const dataArray = [];
  const transformData = (data) => {
    for (let key in data) {
      dataArray.push({ id: key, ...data[key] });
    }
    return dataArray;
  };
  try {
    const queryParams =
      '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
    const response = await axiosFirebaseData.get('/orders.json' + queryParams);
    transformData(response.data);
    dispatch(fetchOrdersSuccess(dataArray));
  } catch (err) {
    dispatch(fetchOrdersFail());
  }
};
