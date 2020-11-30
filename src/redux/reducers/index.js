import { combineReducers } from 'redux';

import { burgerBuilderReducer } from '../reducers/burgerBuilderReducer';
import { checkoutReducer } from '../reducers/checkoutReducer';
import { ordersReducer } from '../reducers/ordersReducer';

const rootReducer = combineReducers({
  burger: burgerBuilderReducer,
  checkout: checkoutReducer,
  orders: ordersReducer,
});

export default rootReducer;
