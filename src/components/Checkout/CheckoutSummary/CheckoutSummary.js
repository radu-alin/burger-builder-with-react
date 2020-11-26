import BurgerView from '../../Burger/BurgerView/BurgerView';

import Button from '../../UI/Button/Button';

import './CheckoutSummary.scss';

const CheckoutSummary = ({ ingredients, checkoutCancel, checkoutContinue }) => {
  return (
    <section id="CheckoutSummary" className="bg-gray-main">
      <div className="container py-1">
        <div className="checkout-summary ">
          <h1>He hope it taste well!</h1>
          <BurgerView ingredients={ingredients} size={'small'} />
          <div className="checkout-summary-buttons">
            <Button type="less" spacing="my-1" onClickAction={checkoutCancel}>
              Cancel
            </Button>
            <Button type="more" spacing="my-1" onClickAction={checkoutContinue}>
              Continue
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSummary;
