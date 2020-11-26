import Button from '../../UI/Button/Button';

import Aux from '../../../hoc/Aux/Aux';

const OrderSummary = ({
  ingredients,
  totalPrice,
  continuePurchase,
  cancelPurchase,
}) => {
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
      <h4 className="my-1">Total Price: &#8364; {totalPrice.toFixed(2)}</h4>
      <p>Continue to Checkout ?</p>
      <Button type="less order my-1" onClickAction={cancelPurchase}>
        CANCEL
      </Button>
      <Button type="more order my-1" onClickAction={continuePurchase}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OrderSummary;
