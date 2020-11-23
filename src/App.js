import { Component } from 'react';

import BurgerBuilderPage from './containers/BurgerBuilderPage/BurgerBuilderPage';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilderPage />
      </Layout>
    );
  }
}

export default App;
