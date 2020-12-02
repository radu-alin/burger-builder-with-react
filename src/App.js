import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import BurgerBuilderPage from './containers/BurgerBuilderPage/BurgerBuilderPage';
import CheckoutPage from './containers/CheckoutPage/CheckoutPage';
import OrdersPage from './containers/OrdersPage/OrdersPage';
import AuthPage from './containers/AuthPage/AuthPage';
import Logout from './containers/AuthPage/Logout/Logout';

import { authCheckValidity } from './redux/actions/index';

const App = ({ onAuthCheckValidity }) => {
  onAuthCheckValidity();
  return (
    <Layout>
      <Route path="/" exact component={BurgerBuilderPage} />
      <Route path="/checkout" component={CheckoutPage} />
      <Route path="/orders" component={OrdersPage} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/logout" component={Logout} />
    </Layout>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onAuthCheckValidity: () => dispatch(authCheckValidity()),
});

export default connect(null, mapDispatchToProps)(App);
