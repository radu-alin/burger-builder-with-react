import { Component } from 'react';
import { Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilderPage from './containers/BurgerBuilderPage/BurgerBuilderPage';
import CheckoutPage from './containers/CheckoutPage/CheckoutPage';
class App extends Component {
  render() {
    return (
      <Layout>
        <Route path="/" exact component={BurgerBuilderPage} />
        <Route path="/checkout" component={CheckoutPage} />
      </Layout>
    );
  }
}

export default App;
