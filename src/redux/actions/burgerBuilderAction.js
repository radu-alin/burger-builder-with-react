import * as actionTypes from './actionTypes';
import { axiosFirebaseData } from '../../axios-instance';

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

export const fetchIngredients = () => async (dispatch) => {
  try {
    const response = await axiosFirebaseData.get('/ingredients.json');
    dispatch(fetchIngredientsSuccess(response.data));
  } catch (err) {
    dispatch(fetchIngredientsFail());
  }
};
