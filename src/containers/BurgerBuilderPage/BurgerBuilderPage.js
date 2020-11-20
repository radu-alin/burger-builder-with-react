import { Component } from 'react';

import BurgerView from '../../components/Burger/BurgerView/BurgerView';
import BurgerBuildControls from '../../components/Burger/BurgerBuildControls/BurgerBuildControls';

class BurgerBuilderPage extends Component {
  state = {
    ingredients: {
      bacon: 1,
      cheese: 1,
      salad: 1,
      meat: 1,
    },
  };

  render() {
    return (
      <div className="container py-1 bg-main">
        <BurgerView ingredients={this.state.ingredients} />
        <BurgerBuildControls />
      </div>
    );
  }
}

export default BurgerBuilderPage;
