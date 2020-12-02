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

export const authLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('localId');
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const authLogoutTimeout = (expirationTime) => (dispatch) => {
  setTimeout(() => {
    dispatch(authLogout());
  }, expirationTime * 1000);
};

export const authCheckValidity = () => (dispatch) => {
  const idToken = localStorage.getItem('token');
  if (!idToken) {
    dispatch(authLogout());
  } else {
    const expirationDate = new Date(localStorage.getItem('expirationDate'));
    if (expirationDate > new Date()) {
      const localId = localStorage.getItem('localId');

      dispatch(authSuccess({ idToken, localId }));
      dispatch(
        authLogoutTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        )
      );
    }
  }
};

export const auth = (email, password, isNewAccount) => async (dispatch) => {
  const authData = {
    email: email,
    password: password,
    returnSecureToken: true,
  };
  const setExpirationDate = (expirationTime) =>
    new Date(new Date().getTime() + expirationTime * 1000);

  let url = '/accounts:signUp?key=AIzaSyCriYLOrCB5Gqw868nZn7hFs3UyON4eJ8g';
  if (!isNewAccount) {
    url =
      '/accounts:signInWithPassword?key=AIzaSyCriYLOrCB5Gqw868nZn7hFs3UyON4eJ8g';
  }
  dispatch(authStart());
  try {
    const response = await axiosFirebaseAuth.post(url, authData);
    localStorage.setItem('token', response.data.idToken);
    localStorage.setItem(
      'expirationDate',
      setExpirationDate(response.data.expiresIn)
    );
    localStorage.setItem('localId', response.data.localId);
    dispatch(authSuccess(response.data));
    dispatch(authLogoutTimeout(response.data.expiresIn));
  } catch (err) {
    dispatch(authFail(err.response.data.error.message));
  }
};
