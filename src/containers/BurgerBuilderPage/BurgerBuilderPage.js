import { Component } from 'react';

import BurgerView from '../../components/Burger/BurgerView/BurgerView';
import BurgerBuildControls from '../../components/Burger/BurgerBuildControls/BurgerBuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';

const INGREDIENT_PRICES = {
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
  salad: 0.5,
};
class BurgerBuilderPage extends Component {
  state = {
    ingredients: {
      bacon: 0,
      cheese: 0,
      salad: 0,
      meat: 0,
    },
    totalPrice: 4,
    enableOrderNow: false,
    enableCheckout: false,
  };

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
    alert('you continue');
  };

  render() {
    const renderModal = () => (
      <Modal
        show={this.state.enableCheckout}
        disableModal={this.disableCheckoutHandler}
      >
        <OrderSummary
          ingredients={this.state.ingredients}
          totalPrice={this.state.totalPrice}
          cancelPurchase={this.disableCheckoutHandler}
          continuePurchase={this.continueCheckoutHandler}
        />
      </Modal>
    );

    return (
      <div id="BurgerBuilderPage" className="container mg-0-auto p-1">
        {renderModal()}
        <section id="BurgerView">
          <BurgerView ingredients={this.state.ingredients} />
        </section>
        <section id="BurgerBuildControls">
          <BurgerBuildControls
            buttonLessDisabled={this.enableButtonLessHandler()}
            ingAdd={this.addIngredientHandler}
            ingRemove={this.removeIngredientHandler}
            totalPrice={this.state.totalPrice}
            buttonOrderDisabled={this.state.enableOrderNow}
            enableCheckout={this.enableCheckoutHandler}
          />
        </section>
      </div>
    );
  }
}

export default BurgerBuilderPage;
