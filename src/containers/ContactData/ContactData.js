import { Component } from 'react';

import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

import axiosFirebase from '../../axios-orders';

import './ContactData.scss';

class ContactDataPage extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const data = {
      ingredients: this.props.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Alin RADU',
        address: {
          street: 'testStreet',
          zipCode: '550036',
          country: 'Romania',
        },
        email: 'testEmail@test.com',
      },
      deliveryMethod: 'fastest',
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

  renderForm = () => {
    let form = (
      <form>
        <input type="text" name="name" placeholder="Your name" />
        <input type="email" name="email" placeholder="Your Mail" />
        <input type="text" name="street" placeholder="Street" />
        <input type="text" name="postal" placeholder="Postal Code" />
        <Button
          type={'more'}
          spacing={'my-1'}
          onClickAction={this.orderHandler}
        >
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
            <div className="flexyx-center">{this.renderForm()}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactDataPage;
