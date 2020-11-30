import { useEffect, Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import ContactData from '../ContactData/ContactData';

import { purchaseBurgerInit } from '../../redux/actions';

const CheckoutPage = ({
  ingredients,
  totalPrice,
  match,
  history,
  onPurchaseInit,
}) => {
  useEffect(() => onPurchaseInit(), [onPurchaseInit]);

  const checkoutCancelHandler = () => {
    history.goBack();
  };
  const checkoutContinueHandler = () => {
    history.replace(match.url + '/contact-data');
  };

  const renderCheckoutPage = ingredients ? (
    <Fragment>
      <CheckoutSummary
        ingredients={ingredients}
        totalPrice={totalPrice}
        checkoutCancel={checkoutCancelHandler}
        checkoutContinue={checkoutContinueHandler}
      />
      <Route path={match.path + '/contact-data'} component={ContactData} />
    </Fragment>
  ) : (
    <Redirect to="/" />
  );

  return <main id="CheckoutSummary">{renderCheckoutPage}</main>;
};

const mapStateToProps = ({ burger: { ingredients, totalPrice } }) => ({
  ingredients,
  totalPrice,
});

const mapDispatchToProps = (dispatch) => ({
  onPurchaseInit: () => dispatch(purchaseBurgerInit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
