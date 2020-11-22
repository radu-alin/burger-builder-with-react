import { Component } from 'react';

import BurgerBuilderPage from './containers/BurgerBuilderPage/BurgerBuilderPage';
import Toolbar from './components/Navigation/Toolbar/Toolbar';

import Aux from './hoc/Aux/Aux';
class App extends Component {
  render() {
    return (
      <Aux>
        <Toolbar />
        <BurgerBuilderPage />
      </Aux>
    );
  }
}

export default App;
