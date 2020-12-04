import { memo } from 'react';

import BurgerBuildControl from './BurgerBuildControl/BurgerBuildControl';
import Button from '../../UI/Button/Button';

import './BurgerBuilControls.scss';

const controls = [
  {
    label: 'Salad',
    type: 'salad',
  },
  {
    label: 'Bacon',
    type: 'bacon',
  },
  {
    label: 'Cheese',
    type: 'cheese',
  },
  {
    label: 'Meat',
    type: 'meat',
  },
];

const BurgerBuildControls = ({
  ingAdd,
  ingRemove,
  lessButtonDisabled,
  orderNowButtonDisabled,
  totalPrice,
  enableCheckout,
  isAuth,
}) => {
  const renderButtons = controls.map((control) => {
    return (
      <BurgerBuildControl
        key={control.type}
        label={control.label}
        lessButtonDisabled={lessButtonDisabled[control.type]}
        ingRemove={() => ingRemove(control.type)}
        ingAdd={() => ingAdd(control.type)}
        totalPrice={totalPrice}
      />
    );
  });

  return (
    <section
      id="BurgerBuildControls"
      className="burger-build-controls bg-brown-main"
    >
      <div className="container py-2 ">
        <div className="build-controls mg-auto">
          <p className="p-1">Price: &#8364; {totalPrice.toFixed(2)}</p>
          {renderButtons}
          <Button
            type="brown-dark big"
            spacing="my-1"
            onClickAction={enableCheckout}
            disabled={!orderNowButtonDisabled}
          >
            {isAuth ? 'Order Now' : 'Authenticate to Order'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default memo(BurgerBuildControls);
