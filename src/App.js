import { useEffect, Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import BurgerBuilderPage from './containers/BurgerBuilderPage/BurgerBuilderPage';
import CheckoutPage from './containers/CheckoutPage/CheckoutPage';
import OrdersPage from './containers/OrdersPage/OrdersPage';
import AuthPage from './containers/AuthPage/AuthPage';
import Logout from './containers/AuthPage/Logout/Logout';

import { authCheckValidity } from './redux/actions/index';

const App = ({ isAuth, onAuthCheckValidity }) => {
  useEffect(() => onAuthCheckValidity(), [onAuthCheckValidity]);

  const protectedRoutes = (
    <Fragment>
      <Route path="/checkout" component={CheckoutPage} />
      <Route path="/orders" component={OrdersPage} />
      <Route path="/logout" component={Logout} />
    </Fragment>
  );

  const routes = (
    <Fragment>
      <Route path="/auth" component={AuthPage} />
      <Route path="/" exact component={BurgerBuilderPage} />
      <Redirect to="/" />
    </Fragment>
  );
  return (
    <Layout>
      {routes}
      {isAuth ? protectedRoutes : null}
    </Layout>
  );
};

const mapStateToProps = ({ auth: { token } }) => ({
  isAuth: !!token,
});

const mapDispatchToProps = (dispatch) => ({
  onAuthCheckValidity: () => dispatch(authCheckValidity()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
