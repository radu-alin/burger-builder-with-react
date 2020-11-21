import { Component } from 'react';

import BurgerView from '../../components/Burger/BurgerView/BurgerView';
import BurgerBuildControls from '../../components/Burger/BurgerBuildControls/BurgerBuildControls';

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
    purchasable: false,
  };

  updatePurchasableState = (price) => {
    if (price > 4) {
      this.setState({ purchasable: true });
    } else {
      this.setState({ purchasable: false });
    }
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

    this.updatePurchasableState(updatedPrice);
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

    this.updatePurchasableState(updatedPrice);
  };

  disableButtonHandler = () => {
    const disableInfo = {
      ...this.state.ingredients,
    };
    for (const key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return disableInfo;
  };

  render() {
    return (
      <div className="container mg-0-auto">
        <section id="BurgerView">
          <BurgerView ingredients={this.state.ingredients} />
        </section>
        <section id="BurgerBuildControls">
          <BurgerBuildControls
            buttonLessDisabled={this.disableButtonHandler()}
            ingAdd={this.addIngredientHandler}
            ingRemove={this.removeIngredientHandler}
            totalPrice={this.state.totalPrice}
            buttonOrderDisabled={this.state.purchasable}
          />
        </section>
      </div>
    );
  }
}

export default BurgerBuilderPage;
