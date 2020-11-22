import { Component } from 'react';

import BurgerBuilderPage from './containers/BurgerBuilderPage/BurgerBuilderPage';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';

import Aux from './hoc/Aux/Aux';
class App extends Component {
  render() {
    return (
      <Aux>
        <SideDrawer />
        <Toolbar />
        <BurgerBuilderPage />
      </Aux>
    );
  }
}

export default App;
