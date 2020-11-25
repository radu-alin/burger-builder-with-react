import Order from './Order/Order';

import './Orders.scss';

const Orders = ({ orders }) => {
  const renderOrders = () => {
    if (orders.length === 0) {
      return <p>Please make an Order</p>;
    }
    if (orders !== null) {
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
    }
  };
  return (
    <section className="bg-gray-main">
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
