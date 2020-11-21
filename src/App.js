import { Component } from 'react';

import Aux from './hoc/Aux/Aux';

import BurgerBuilderPage from './containers/BurgerBuilderPage/BurgerBuilderPage';

class App extends Component {
  render() {
    return (
      <Aux>
        <header>
          <p>Toolbar, Sidebar, Backdrop</p>
        </header>
        <main className="bg-brown-main">
          <BurgerBuilderPage />
        </main>
      </Aux>
    );
  }
}

export default App;
