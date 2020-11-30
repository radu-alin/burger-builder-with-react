import { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import { state } from './state';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

import { checkValidity } from '../../utility/utility';
import { axiosFirebase } from '../../axios-orders';
import withErrorHandler from '../../hoc/withtErrorHandler/withErrorHandler';

import { purchaseBurger } from '../../redux/actions';

import './ContactData.scss';

class ContactDataPage extends Component {
  state = state;

  formDataHandler = (data) => {
    const customerData = {};
    for (let key in data) {
      customerData[key] = data[key].value;
    }
    return customerData;
  };

  orderHandler = (event) => {
    event.preventDefault();
    const date = new Date();
    const orderData = {
      customer: this.formDataHandler(this.state.orderForm),
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice,
      orderDate: date.toLocaleString(),
    };
    this.props.onPurchaseBurger(orderData);
  };

  isFormValidHandler = (data) => {
    let isFormValid = true;
    for (let key in data) {
      isFormValid = data[key].isValid && isFormValid;
    }
    return isFormValid;
  };

  inputChangedHandler = (event, inputId) => {
    const updatedOrderForm = {
      ...this.state.orderForm,
    };
    const updatedFormEl = {
      ...updatedOrderForm[inputId],
    };
    updatedFormEl.value = event.target.value;
    updatedFormEl.isTouched = true;
    updatedFormEl.isValid = checkValidity(
      updatedFormEl.value,
      updatedFormEl.validation
    );
    updatedOrderForm[inputId] = updatedFormEl;

    const isFormValid = this.isFormValidHandler(updatedOrderForm);

    this.setState({ orderForm: updatedOrderForm, isFormValid });
  };

  renderInputs = (data) => {
    const formElementsArray = [];
    for (let key in data) {
      formElementsArray.push({
        id: key,
        config: data[key],
      });
    }

    const inputs = formElementsArray.map((formEl) => {
      return (
        <Input
          key={formEl.id}
          label={formEl.config.label}
          elementType={formEl.config.elementType}
          value={formEl.config.value}
          isTouched={formEl.config.isTouched}
          isValid={formEl.config.isValid}
          shouldValidate={formEl.config.validation}
          onChangeAction={(event) => this.inputChangedHandler(event, formEl.id)}
          {...formEl.config.elementConfig}
        />
      );
    });

    return inputs;
  };

  renderForm = () => {
    let form = (
      <Fragment>
        <h3>Enter You Contact Data</h3>
        <div className="flexyx-center py-1">
          <form onSubmit={this.orderHandler}>
            {this.renderInputs(this.state.orderForm)}
            <Button
              type="brown-dark big"
              spacing="my-1"
              disabled={!this.state.isFormValid}
            >
              Order
            </Button>
          </form>
        </div>
      </Fragment>
    );

    if (this.props.isLoading) {
      form = <Spinner />;
    }
    return form;
  };

  renderFormSubmittedResponse = () => {
    const onClickAction = () => {
      this.props.history.replace('/');
    };

    let response = (
      <div className="contact-data-submitted">
        <h3>Your order has been sent successfully</h3>
        <Button
          type="brown-dark big "
          spacing="py-1"
          onClickAction={onClickAction}
        >
          Main Page
        </Button>
      </div>
    );

    if (this.props.isError) {
      response = (
        <div className="contact-data-submitted">
          <h3>An error occurred</h3>
          <p>Please make a new order</p>
          <Button
            type="brown-dark big "
            spacing="py-1"
            onClickAction={onClickAction}
          >
            Main Page
          </Button>
        </div>
      );
    }
    return response;
  };

  renderContactData = () => {
    return (
      <section id="ContactPage" className="bg-brown-main">
        <div className="container py-2">
          <div className="contact-data py-2 mg-auto bg-gray-main">
            {!this.props.isSubmitted
              ? this.renderForm()
              : this.renderFormSubmittedResponse()}
          </div>
        </div>
      </section>
    );
  };

  render() {
    return <Fragment>{this.renderContactData()}</Fragment>;
  }
}

const mapStateToProps = ({
  burger: { ingredients, totalPrice },
  checkout: { isLoading, isSubmitted, isError },
}) => ({
  ingredients,
  totalPrice,
  isLoading,
  isSubmitted,
  isError,
});

const mapDispatchToProps = (dispatch) => ({
  onPurchaseBurger: (orderData) => dispatch(purchaseBurger(orderData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ContactDataPage, axiosFirebase));
