import * as actionTypes from './actionTypes';
import { axiosFirebase } from '../../axios-orders';

export const addIngredient = (ing) => ({
  type: actionTypes.ADD_INGREDIENT,
  payload: ing,
});

export const removeIngredient = (ing) => ({
  type: actionTypes.REMOVE_INGREDIENT,
  payload: ing,
});

export const fetchIngredientsSuccess = (ing) => ({
  type: actionTypes.FETCH_INGREDIENTS_SUCCESS,
  payload: ing,
});

export const fetchIngredientsFail = () => ({
  type: actionTypes.FETCH_INGREDIENTS_FAIL,
});

export const fetchIngredients = () => (dispatch) => {
  axiosFirebase
    .get('/ingredients.json')
    .then((res) => dispatch(fetchIngredientsSuccess(res.data)))
    .catch((err) => dispatch(fetchIngredientsFail()));
};
