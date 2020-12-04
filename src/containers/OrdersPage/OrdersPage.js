import { useEffect } from 'react';
import { connect } from 'react-redux';

import Orders from '../../components/Orders/Orders';
import Spinner from '../../components/UI/Spinner/Spinner';

import { axiosFirebaseData } from '../../axios-instance';
import withErrorHandler from '../../hoc/withtErrorHandler/withErrorHandler';
import {
  fetchOrders,
  fetchOrdersResetSpinner,
} from '../../redux/actions/index';

const OrdersPage = ({
  orders,
  isLoading,
  isError,
  token,
  userId,
  onFetchOrders,
  onResetSpinner,
}) => {
  useEffect(() => {
    onFetchOrders(token, userId);
    return () => onResetSpinner();
  }, [onFetchOrders, onResetSpinner, token, userId]);

  const renderOrdersPage = () => {
    let renderOrders = <Spinner center />;
    if (!isLoading) {
      renderOrders = <Orders orders={orders} />;
    }
    if (!isLoading && isError) {
      renderOrders = null;
    }
    return renderOrders;
  };
  return (
    <main id="OrdersPage" className="bg-gray-main">
      {renderOrdersPage()}
    </main>
  );
};

const mapStateToProps = ({
  orders: { orders, isLoading, isError },
  auth: { token, userId },
}) => ({
  orders,
  isLoading,
  isError,
  token,
  userId,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchOrders: (token, userId) => dispatch(fetchOrders(token, userId)),
  onResetSpinner: () => dispatch(fetchOrdersResetSpinner()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(OrdersPage, axiosFirebaseData));
