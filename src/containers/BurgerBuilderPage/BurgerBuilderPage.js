import { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import BurgerView from '../../components/Burger/BurgerView/BurgerView';
import BurgerBuildControls from '../../components/Burger/BurgerBuildControls/BurgerBuildControls';
import OrderSummary from '../../components/Burger/BurgerOrderSummary/BurgerOrderSummary';
import Modal from '../../components/UI/Modal/Modal';

import Spinner from '../../components/UI/Spinner/Spinner';

import withErrorHandler from '../../hoc/withtErrorHandler/withErrorHandler';
import { axiosFirebaseData } from '../../axios-instance';
import {
  addIngredient,
  removeIngredient,
  fetchIngredients,
} from '../../redux/actions/index';

class BurgerBuilderPage extends Component {
  state = {
    isEnableCheckout: false,
  };

  componentDidMount() {
    this.props.onFetchIngredients();
  }

  lessButtonDisabledHandler = () => {
    const disableInfo = {
      ...this.props.ingredients,
    };
    for (const key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return disableInfo;
  };

  orderNowButtonDisabledHandler = (price) => {
    return price > 4;
  };

  enableCheckoutHandler = () => {
    if (this.props.isAuth) {
      this.setState({ isEnableCheckout: true });
    } else {
      this.props.history.push('/auth');
    }
  };

  disableCheckoutHandler = () => {
    this.setState({ isEnableCheckout: false });
  };

  continueCheckoutHandler = () => {
    this.props.history.push('/checkout');
  };

  renderModal = () => {
    return (
      <Modal
        show={this.state.isEnableCheckout}
        disableModal={this.disableCheckoutHandler}
      >
        <OrderSummary
          ingredients={this.props.ingredients}
          totalPrice={this.props.totalPrice}
          cancelPurchase={this.disableCheckoutHandler}
          continuePurchase={this.continueCheckoutHandler}
        />
      </Modal>
    );
  };

  renderBugerBuilderPage = () => {
    let burgerBuilderPage = <Spinner center />;
    if (!this.props.isLoading) {
      burgerBuilderPage = !this.props.isError ? (
        <Fragment>
          <BurgerView ingredients={this.props.ingredients} size={'large'} />
          <BurgerBuildControls
            ingAdd={this.props.onAddIngredient}
            ingRemove={this.props.onRemoveIngredient}
            lessButtonDisabled={this.lessButtonDisabledHandler()}
            orderNowButtonDisabled={this.orderNowButtonDisabledHandler(
              this.props.totalPrice
            )}
            totalPrice={this.props.totalPrice}
            enableCheckout={this.enableCheckoutHandler}
            isAuth={this.props.isAuth}
          />
        </Fragment>
      ) : null;
    }
    return burgerBuilderPage;
  };

  render() {
    console.log('[BurgerBuilderPage] - render()');
    return (
      <main id="BurgerBuilderPage">
        {this.renderBugerBuilderPage()}
        {this.state.isEnableCheckout ? this.renderModal() : null}
      </main>
    );
  }
}

const mapStateTopPros = ({
  burger: { ingredients, totalPrice, isLoading, isError },
  auth: { token },
}) => ({
  ingredients,
  totalPrice,
  isLoading,
  isError,
  isAuth: !!token,
});

const mapDispatchToProps = (dispach) => ({
  onAddIngredient: (ing) => dispach(addIngredient(ing)),
  onRemoveIngredient: (ing) => dispach(removeIngredient(ing)),
  onFetchIngredients: () => dispach(fetchIngredients()),
});

export default connect(
  mapStateTopPros,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilderPage, axiosFirebaseData));
