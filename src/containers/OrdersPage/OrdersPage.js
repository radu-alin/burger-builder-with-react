import { useEffect } from 'react';
import { connect } from 'react-redux';

import Orders from '../../components/Orders/Orders';
import Spinner from '../../components/UI/Spinner/Spinner';

import { axiosFirebaseData } from '../../axios-instance';
import withErrorHandler from '../../hoc/withtErrorHandler/withErrorHandler';
import { fetchOrders } from '../../redux/actions/index';

const OrdersPage = ({ orders, isLoading, isError, token, onFetchOrders }) => {
  useEffect(() => onFetchOrders(token), [onFetchOrders, token]);

  const renderOrdersPage = () => {
    let renderOrders = isLoading && <Spinner center />;
    if (!isLoading || orders) {
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
  auth: { token },
}) => ({
  orders,
  isLoading,
  isError,
  token,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchOrders: (token) => dispatch(fetchOrders(token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(OrdersPage, axiosFirebaseData));
