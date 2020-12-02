import { combineReducers } from 'redux';

import { burgerBuilderReducer } from '../reducers/burgerBuilderReducer';
import { checkoutReducer } from '../reducers/checkoutReducer';
import { ordersReducer } from '../reducers/ordersReducer';
import { authReducer } from '../reducers/authReducer';

const rootReducer = combineReducers({
  burger: burgerBuilderReducer,
  checkout: checkoutReducer,
  orders: ordersReducer,
  auth: authReducer,
});

export default rootReducer;
