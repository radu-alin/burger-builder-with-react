import {
  memo,
  useState,
  useEffect,
  useCallback,
  useMemo,
  Fragment,
} from 'react';
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

const BurgerBuilderPage = memo(
  ({
    ingredients,
    totalPrice,
    isLoading,
    isError,
    isAuth,
    onAddIngredient,
    onRemoveIngredient,
    onFetchIngredients,
    history,
  }) => {
    const [isEnableCheckout, setIsEnableCheckout] = useState(false);

    useEffect(() => onFetchIngredients(), [onFetchIngredients]);

    const lessButtonDisabledHandler = useMemo(() => {
      const disableInfo = {
        ...ingredients,
      };
      for (const key in disableInfo) {
        disableInfo[key] = disableInfo[key] <= 0;
      }
      return disableInfo;
    }, [ingredients]);

    const orderNowButtonDisabledHandler = (price) => {
      return price > 4;
    };

    const enableCheckoutHandler = useCallback(() => {
      if (isAuth) {
        setIsEnableCheckout(true);
      } else {
        history.push('/auth');
      }
    }, [isAuth, history]);

    const disableCheckoutHandler = useCallback(() => {
      setIsEnableCheckout(false);
    }, [setIsEnableCheckout]);

    const continueCheckoutHandler = () => {
      history.push('/checkout');
    };

    const renderModal = () => {
      return (
        <Modal show={isEnableCheckout} disableModal={disableCheckoutHandler}>
          <OrderSummary
            ingredients={ingredients}
            totalPrice={totalPrice}
            cancelPurchase={disableCheckoutHandler}
            continuePurchase={continueCheckoutHandler}
          />
        </Modal>
      );
    };

    const renderBugerBuilderPage = () => {
      let burgerBuilderPage = <Spinner center />;
      if (!isLoading) {
        burgerBuilderPage = !isError ? (
          <Fragment>
            <BurgerView ingredients={ingredients} size={'large'} />
            <BurgerBuildControls
              ingAdd={onAddIngredient}
              ingRemove={onRemoveIngredient}
              lessButtonDisabled={lessButtonDisabledHandler}
              orderNowButtonDisabled={orderNowButtonDisabledHandler(totalPrice)}
              totalPrice={totalPrice}
              enableCheckout={enableCheckoutHandler}
              isAuth={isAuth}
            />
          </Fragment>
        ) : null;
      }
      return burgerBuilderPage;
    };

    console.log('[BurgerBuilderPage] - render()');
    return (
      <main id="BurgerBuilderPage">
        {renderBugerBuilderPage()}
        {renderModal()}
      </main>
    );
  }
);

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
