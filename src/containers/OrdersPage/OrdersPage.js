import { Component } from 'react';

import Orders from '../../components/Orders/Orders';
import Spinner from '../../components/UI/Spinner/Spinner';

import axiosFirebase from '../../axios-orders';
import withErrorHandler from '../../hoc/withtErrorHandler/withErrorHandler';

class OrdersPage extends Component {
  state = {
    orders: [],
    loading: true,
  };

  transformData = (data) => {
    const dataArray = [];
    for (let key in data) {
      dataArray.push({ id: key, ...data[key] });
    }
    return dataArray;
  };

  componentDidMount() {
    axiosFirebase
      .get('/orders.json')
      .then((res) => {
        const orders = this.transformData(res.data);
        this.setState({ orders: orders, loading: false });
      })
      .catch((err) => this.setState({ loading: false }));
  }

  renderOrders = (condition) => {
    let orders = condition ? (
      <Spinner />
    ) : (
      <Orders orders={this.state.orders} />
    );
    return orders;
  };

  render() {
    return <main id="OrdersPage">{this.renderOrders(this.state.loading)}</main>;
  }
}

export default withErrorHandler(OrdersPage, axiosFirebase);
