import BurgerView from '../Burger/BurgerView/BurgerView';

import Button from '../UI/Button/Button';

import './CheckoutSummary.scss';

const CheckoutSummary = ({
  ingredients,
  totalPrice,
  checkoutCancel,
  checkoutContinue,
}) => {
  return (
    <section id="CheckoutSummary" className="bg-gray-main">
      <div className="container py-1">
        <div className="checkout-summary ">
          <h1>He hope it taste well!</h1>
          <BurgerView ingredients={ingredients} size={'small'} />
          <h4>Total Price: &#8364; {totalPrice.toFixed(2)}</h4>
          <div className="checkout-summary-buttons">
            <Button
              type="brown-light big"
              spacing="m-1"
              onClickAction={checkoutCancel}
            >
              Cancel
            </Button>
            <Button
              type="brown-dark big"
              spacing="m-1"
              onClickAction={checkoutContinue}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSummary;
