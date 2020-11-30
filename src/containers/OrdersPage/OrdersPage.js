import { useEffect } from 'react';
import { connect } from 'react-redux';

import Orders from '../../components/Orders/Orders';
import Spinner from '../../components/UI/Spinner/Spinner';

import { axiosFirebase } from '../../axios-orders';
import withErrorHandler from '../../hoc/withtErrorHandler/withErrorHandler';
import { fetchOrders } from '../../redux/actions/index';

const OrdersPage = ({ orders, isLoading, isError, onFetchOrders }) => {
  useEffect(() => onFetchOrders(), [onFetchOrders]);

  const renderOrdersPage = () => {
    let renderOrders = isLoading && <Spinner center />;
    if (!isLoading) {
      return (renderOrders = !isError ? <Orders orders={orders} /> : null);
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
  orders: { orders, isLoading, isError, errorMsg },
}) => ({
  orders,
  isLoading,
  isError,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchOrders: () => dispatch(fetchOrders()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(OrdersPage, axiosFirebase));
