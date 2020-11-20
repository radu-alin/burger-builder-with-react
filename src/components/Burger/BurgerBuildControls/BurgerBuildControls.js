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

const BurgerBuildControls = () => {
  const renderButtons = controls.map((control) => {
    return <BurgerBuildControl key={control.type} label={control.label} />;
  });

  return <div className="build-controls p-1 mg-auto">{renderButtons}</div>;
};

export default BurgerBuildControls;
