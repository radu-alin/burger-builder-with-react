import { useEffect, Fragment, lazy, Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import BurgerBuilderPage from './containers/BurgerBuilderPage/BurgerBuilderPage';

import { authCheckValidity } from './redux/actions/index';

const CheckoutPage = lazy(() =>
  import(
    /* webpackPrefetch: true,  webpackChunkName: "checkout" */ './containers/CheckoutPage/CheckoutPage.js'
  )
);
const OrdersPage = lazy(() =>
  import(
    /* webpackPrefetch: true, webpackChunkName: "orders"  */ './containers/OrdersPage/OrdersPage.js'
  )
);
const AuthPage = lazy(() =>
  import(
    /* webpackPrefetch: true, webpackChunkName: "auth" */ './containers/AuthPage/AuthPage.js'
  )
);
const Logout = lazy(() =>
  import(
    /* webpackPrefetch: true , webpackChunkName: "logout" */ './containers/AuthPage/Logout/Logout.js'
  )
);

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
      <Suspense fallback>
        {routes}
        {isAuth ? protectedRoutes : null}
      </Suspense>
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
