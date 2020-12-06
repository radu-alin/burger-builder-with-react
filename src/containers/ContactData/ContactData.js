import { Fragment, useState, lazy } from 'react';
import { connect } from 'react-redux';

import { defaultState } from './state';

import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

import { renderInputs } from '../../utility/utility';
import { axiosFirebaseData } from '../../axios-instance';
import withErrorHandler from '../../hoc/withtErrorHandler/withErrorHandler';

import { purchaseBurger } from '../../redux/actions';

import './ContactData.scss';

const Input = lazy(() =>
  import(
    /* webpackPrefetch: true,  webpackChunkName: "input" */ '../../components/UI/Input/Input'
  )
);

const ContactDataPage = ({
  ingredients,
  totalPrice,
  isLoading,
  isSubmitted,
  isError,
  token,
  userId,
  history,
  onPurchaseBurger,
}) => {
  const [formData, setFormData] = useState({ ...defaultState });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const date = new Date();
    const orderData = {
      orderData: formInputsDataHandler(formData.formInputsData),
      ingredients: ingredients,
      totalPrice: totalPrice,
      orderDate: date.toLocaleString(),
      userId: userId,
    };
    onPurchaseBurger(orderData, token);
  };

  const formInputsDataHandler = (data) => {
    const orderData = {};
    for (let key in data) {
      orderData[key] = data[key].value;
    }

    return orderData;
  };

  const renderForm = () => {
    let form = (
      <Fragment>
        <h3>Enter You Contact Data</h3>
        <div className="flexyx-center py-1">
          <form onSubmit={onSubmitHandler}>
            {renderInputs(Input, formData, setFormData)}
            <Button
              type="brown-dark big"
              spacing="my-1"
              disabled={!formData.isFormValid}
            >
              Order
            </Button>
          </form>
        </div>
      </Fragment>
    );
    if (isLoading) {
      form = <Spinner />;
    }

    return form;
  };

  const renderFormSubmittedResponse = () => {
    const onClickAction = () => {
      history.replace('/');
    };
    let title = 'Your order has been sent successfully';
    let message = 'Good appetite';
    if (isError) {
      title = 'An error occurred';
      message = 'Please make a new order';
    }
    const response = (
      <div className="contact-data-submitted">
        <h3>{title}</h3>
        <p>{message}</p>
        <Button
          type="brown-dark big "
          spacing="py-1"
          onClickAction={onClickAction}
        >
          Main Page
        </Button>
      </div>
    );

    return response;
  };

  const renderContactData = () => {
    return (
      <section id="ContactPage" className="bg-brown-main">
        <div className="container py-2">
          <div className="contact-data py-2 mg-auto bg-gray-main">
            {!isSubmitted ? renderForm() : renderFormSubmittedResponse()}
          </div>
        </div>
      </section>
    );
  };

  return <Fragment>{renderContactData()}</Fragment>;
};

const mapStateToProps = ({
  burger: { ingredients, totalPrice },
  checkout: { isLoading, isSubmitted, isError },
  auth: { token, userId },
}) => ({
  ingredients,
  totalPrice,
  isLoading,
  isSubmitted,
  isError,
  token,
  userId,
});

const mapDispatchToProps = (dispatch) => ({
  onPurchaseBurger: (orderData, token) =>
    dispatch(purchaseBurger(orderData, token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ContactDataPage, axiosFirebaseData));
