import BurgerBuildControl from './BurgerBuildControl/BurgerBuildControl';
import Button from '../../UI/Button/Button';

import './BurgerBuilControls.scss';

const controls = [
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
  {
    label: 'Salad',
    type: 'salad',
  },
];

const BurgerBuildControls = ({
  ingAdd,
  ingRemove,
  buttonLessDisabled,
  buttonOrderDisabled,
  totalPrice,
  enableCheckout,
}) => {
  const renderButtons = controls.map((control) => {
    return (
      <BurgerBuildControl
        key={control.type}
        label={control.label}
        buttonLessDisabled={buttonLessDisabled[control.type]}
        ingRemove={() => ingRemove(control.type)}
        ingAdd={() => ingAdd(control.type)}
        totalPrice={totalPrice}
      />
    );
  });

  return (
    <section id="BurgerBuildControls" className="build-controls p-1 my-2">
      <p className="p-1">Price: &#8364; {totalPrice.toFixed(2)}</p>
      {renderButtons}
      <Button
        type={'more order'}
        spacing={'my-1'}
        onClickAction={enableCheckout}
        disabled={!buttonOrderDisabled}
      >
        Order Now
      </Button>
    </section>
  );
};

export default BurgerBuildControls;
