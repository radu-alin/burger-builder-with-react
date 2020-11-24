import { Component } from 'react';

import BurgerView from '../../components/Burger/BurgerView/BurgerView';
import BurgerBuildControls from '../../components/Burger/BurgerBuildControls/BurgerBuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';

import Spinner from '../../components/UI/Spinner/Spinner';

import Aux from '../../hoc/Aux/Aux';
import withErrorHandler from '../../hoc/withtErrorHandler/withErrorHandler';
import axiosFirebase from '../../axios-orders';

const INGREDIENT_PRICES = {
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
  salad: 0.5,
};
class BurgerBuilderPage extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    enableOrderNow: false,
    enableCheckout: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    axiosFirebase
      .get('https://burger-builder-react-37b35.firebaseio.com/ingredients.json')
      .then((res) => {
        this.setState({ ingredients: res.data });
      })
      .catch((err) => this.setState({ error: true }));
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice + priceAddition;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice,
    });

    this.enableButtonOrderNowHandler(updatedPrice);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice - priceDeduction;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice,
    });

    this.enableButtonOrderNowHandler(updatedPrice);
  };

  enableButtonLessHandler = () => {
    const disableInfo = {
      ...this.state.ingredients,
    };
    for (const key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return disableInfo;
  };

  enableButtonOrderNowHandler = (price) => {
    if (price > 4) {
      this.setState({ enableOrderNow: true });
    } else {
      this.setState({ enableOrderNow: false });
    }
  };

  enableCheckoutHandler = () => {
    this.setState({ enableCheckout: true });
  };

  disableCheckoutHandler = () => {
    this.setState({ enableCheckout: false });
  };

  continueCheckoutHandler = () => {
    this.setState({ loading: true });
    const data = {
      ingredients: this.state.ingredients,
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
        this.setState({ loading: false, enableCheckout: false });
      })
      .catch((error) => {
        this.setState({ loading: false, enableCheckout: false });
      });
  };

  renderModal = (condition) => {
    const orderSummary = this.state.loading ? (
      <Spinner />
    ) : (
      <OrderSummary
        ingredients={this.state.ingredients}
        totalPrice={this.state.totalPrice}
        cancelPurchase={this.disableCheckoutHandler}
        continuePurchase={this.continueCheckoutHandler}
      />
    );
    if (condition) {
      return (
        <Modal
          show={this.state.enableCheckout}
          disableModal={this.disableCheckoutHandler}
        >
          {orderSummary}
        </Modal>
      );
    }
    return;
  };

  render() {
    let viewPage = this.state.error ? <h1>Hello</h1> : <Spinner />;
    if (this.state.ingredients) {
      viewPage = (
        <Aux>
          <BurgerView ingredients={this.state.ingredients} />
          <BurgerBuildControls
            buttonLessDisabled={this.enableButtonLessHandler()}
            ingAdd={this.addIngredientHandler}
            ingRemove={this.removeIngredientHandler}
            totalPrice={this.state.totalPrice}
            buttonOrderDisabled={this.state.enableOrderNow}
            enableCheckout={this.enableCheckoutHandler}
          />
        </Aux>
      );
    }
    return (
      <main id="BurgerBuilderPage">
        {this.renderModal(this.state.enableCheckout)}
        {viewPage}
      </main>
    );
  }
}

export default withErrorHandler(BurgerBuilderPage, axiosFirebase);
