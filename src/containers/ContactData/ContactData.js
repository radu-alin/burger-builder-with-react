import { Component } from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

import axiosFirebase from '../../axios-orders';

import './ContactData.scss';

class ContactDataPage extends Component {
  state = {
    orderForm: {
      name: {
        label: 'Name',
        elementType: 'input',
        value: '',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name',
        },
        validation: {
          required: 'true',
        },
        valid: false,
        touched: false,
      },
      email: {
        label: 'E-mail',
        elementType: 'input',
        value: '',
        elementConfig: {
          type: 'email',
          placeholder: 'Your E-Mail',
        },
        validation: {
          required: 'true',
        },
        valid: false,
        touched: false,
      },
      street: {
        label: 'Street',
        elementType: 'input',
        value: '',
        elementConfig: {
          type: 'text',
          placeholder: 'Street',
        },
        validation: {
          required: 'true',
        },
        valid: false,
        touched: false,
      },
      postalCode: {
        label: 'Postal Code',
        elementType: 'input',
        value: '',
        elementConfig: {
          type: 'text',
          placeholder: 'Postal Code',
        },
        validation: {
          required: 'true',
          minLength: 5,
          maxLength: 5,
        },
        valid: false,
        touched: false,
      },
      deliveryMethod: {
        label: 'Delivery method',
        elementType: 'select',
        value: 'cheapest',
        validation: {},
        valid: true,
        elementConfig: {
          options: [
            { value: 'cheapest', displayValue: 'Cheapest' },
            { value: 'fastest', displayValue: 'Fastest' },
          ],
          placeholder: 'Delivery Method',
        },
      },
    },
    formIsValid: false,
    loading: false,
  };

  checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  };

  formDataHandler = (data) => {
    const customerData = {};
    for (let key in data) {
      customerData[key] = data[key].value;
    }
    return customerData;
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const date = new Date();
    const data = {
      customer: this.formDataHandler(this.state.orderForm),
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice,
      orderDate: date.toLocaleString(),
    };
    axiosFirebase
      .post('/orders.json', data)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };
  /////////////////////////////////////////////////////////////////////////////

  formIsValidHandler = (data) => {
    let formIsValid = true;
    for (let key in data) {
      formIsValid = data[key].valid && formIsValid;
    }
    return formIsValid;
  };

  inputChangedHandler = (event, inputId) => {
    const updatedOrderForm = {
      ...this.state.orderForm,
    };
    const updatedFormEl = {
      ...updatedOrderForm[inputId],
    };
    updatedFormEl.value = event.target.value;
    updatedFormEl.touched = true;
    updatedFormEl.valid = this.checkValidity(
      updatedFormEl.value,
      updatedFormEl.validation
    );
    updatedOrderForm[inputId] = updatedFormEl;

    const formIsValid = this.formIsValidHandler(updatedOrderForm);

    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
  };
  ////////////////////////////////////////////////udemy238
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
          touched={formEl.config.touched}
          isValid={formEl.config.valid}
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
      <form onSubmit={this.orderHandler}>
        {this.renderInputs(this.state.orderForm)}
        <Button type="more" spacing="my-1" disabled={!this.state.formIsValid}>
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return form;
  };

  render() {
    return (
      <section id="ContactPage">
        <div className="container py-2">
          <div className="contact-data py-2 mg-auto bg-gray-main">
            <h3>Enter You Contact Data</h3>
            <div className="flexyx-center py-1">{this.renderForm()}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactDataPage;
