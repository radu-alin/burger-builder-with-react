import { Component } from 'react';

import BurgerView from '../../components/Burger/BurgerView/BurgerView';
import BurgerBuildControls from '../../components/Burger/BurgerBuildControls/BurgerBuildControls';

class BurgerBuilderPage extends Component {
  state = {
    ingredients: {
      bacon: 0,
      cheese: 0,
      salad: 0,
      meat: 0,
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
