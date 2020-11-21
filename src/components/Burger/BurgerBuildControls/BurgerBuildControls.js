import BurgerBuildControl from './BurgerBuildControl/BurgerBuildControl';

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
  buttonDisabled,
  ingAdd,
  ingRemove,
  totalPrice,
}) => {
  const renderButtons = controls.map((control) => {
    return (
      <BurgerBuildControl
        key={control.type}
        label={control.label}
        buttonDisabled={buttonDisabled[control.type]}
        ingRemove={() => ingRemove(control.type)}
        ingAdd={() => ingAdd(control.type)}
        totalPrice={totalPrice}
      />
    );
  });

  return (
    <div className="build-controls p-1 mg-auto">
      <p className="p-1">Price: &#8364; {totalPrice.toFixed(2)}</p>
      {renderButtons}
    </div>
  );
};

export default BurgerBuildControls;
