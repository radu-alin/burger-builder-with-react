import { axiosFirebaseAuth } from '../../axios-instance';
import * as actionTypes from './actionTypes';

export const authStart = () => ({
  type: actionTypes.AUTH_START,
});

export const authSuccess = (data) => ({
  type: actionTypes.AUTH_SUCCESS,
  payload: data,
});

export const authFail = (error) => ({
  type: actionTypes.AUTH_FAIL,
  payload: error,
});

export const authLogout = () => ({
  type: actionTypes.AUTH_LOGOUT,
});

export const authCheckTimeout = (expirationTime) => (dispatch) => {
  setTimeout(() => {
    dispatch(authLogout());
  }, expirationTime * 1000);
};

export const auth = (email, password, isNewAccount) => async (dispatch) => {
  const authData = {
    email: email,
    password: password,
    returnSecureToken: true,
  };
  let url = '/accounts:signUp?key=AIzaSyCriYLOrCB5Gqw868nZn7hFs3UyON4eJ8g';
  if (!isNewAccount) {
    url =
      '/accounts:signInWithPassword?key=AIzaSyCriYLOrCB5Gqw868nZn7hFs3UyON4eJ8g';
  }
  dispatch(authStart());
  try {
    const response = await axiosFirebaseAuth.post(url, authData);
    dispatch(authSuccess(response.data));
    dispatch(authCheckTimeout(response.data.expiresIn));
  } catch (err) {
    dispatch(authFail(err.response.data.error.message));
    console.log(err.response.data.error.message);
  }
};
