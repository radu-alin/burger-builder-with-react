import * as actionTypes from './actionTypes';
import { axiosFirebase } from '../../axios-orders';

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

export const fetchOrders = () => (dispatch) => {
  const dataArray = [];
  const transformData = (data) => {
    for (let key in data) {
      dataArray.push({ id: key, ...data[key] });
    }
    return dataArray;
  };
  axiosFirebase
    .get('/orders.json')
    .then((res) => {
      transformData(res.data);
      dispatch(fetchOrdersSuccess(dataArray));
    })
    .catch((err) => {
      console.log(err);
      dispatch(fetchOrdersFail());
    });
};
