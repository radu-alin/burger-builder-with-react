import { Fragment } from 'react';

import Button from '../../UI/Button/Button';

const OrderSummary = ({
  ingredients,
  totalPrice,
  continuePurchase,
  cancelPurchase,
}) => {
  const renderIngredients = ingredients
    ? Object.keys(ingredients).map((igKey) => (
        <li key={igKey}>
          {igKey.toLocaleUpperCase()}: {ingredients[igKey]}
        </li>
      ))
    : null;

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingredients:</p>
      <ul>{renderIngredients}</ul>
      <h4 className="my-1">Total Price: &#8364; {totalPrice.toFixed(2)}</h4>
      <p>Continue to Checkout ?</p>
      <Button type="brown-light big m-1" onClickAction={cancelPurchase}>
        CANCEL
      </Button>
      <Button type="brown-dark big m-1" onClickAction={continuePurchase}>
        CONTINUE
      </Button>
    </Fragment>
  );
};

export default OrderSummary;
