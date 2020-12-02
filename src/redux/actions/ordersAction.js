import * as actionTypes from './actionTypes';
import { axiosFirebaseData } from '../../axios-instance';

export const fetchOrdersStart = () => ({
  type: actionTypes.FETCH_ORDERS_START,
});

export const fetchOrdersSuccess = (data) => ({
  type: actionTypes.FETCH_ORDERS_SUCCESS,
  payload: data,
});

export const fetchOrdersFail = () => ({
  type: actionTypes.FETCH_ORDERS_FAIL,
});

export const fetchOrders = (token) => async (dispatch) => {
  const dataArray = [];
  const transformData = (data) => {
    for (let key in data) {
      dataArray.push({ id: key, ...data[key] });
    }
    return dataArray;
  };
  try {
    const response = await axiosFirebaseData.get('/orders.json?auth=' + token);
    transformData(response.data);
    dispatch(fetchOrdersSuccess(dataArray));
  } catch (err) {
    dispatch(fetchOrdersFail());
  }
};
