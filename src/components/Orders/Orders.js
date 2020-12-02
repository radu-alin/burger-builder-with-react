import Order from './Order/Order';

import './Orders.scss';

const Orders = ({ orders }) => {
  const renderOrders = () => {
    if (orders.length === 0) {
      return <p>You don't have any orders. Please make an Order</p>;
    }
    return orders.map((order) => {
      return (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          totalPrice={+order.totalPrice}
          orderDate={order.orderDate}
        />
      );
    });
  };
  return (
    <section id="Orders">
      <div className="container py-1">
        <div className="orders">
          <h3>Your Orders:</h3>
          {renderOrders()}
        </div>
      </div>
    </section>
  );
};

export default Orders;
