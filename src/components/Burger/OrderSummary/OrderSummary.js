import './OrderSummary.scss';

import Aux from '../../../hoc/Aux/Aux';

const OrderSummary = ({ ingredients }) => {
  const renderIngredients = Object.keys(ingredients).map((igKey) => (
    <li key={igKey}>
      {igKey.toLocaleUpperCase()}: {ingredients[igKey]}
    </li>
  ));
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingredients:</p>
      <ul>{renderIngredients}</ul>
      <p>Continue to Checkout ?</p>
    </Aux>
  );
};

export default OrderSummary;
