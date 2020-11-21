import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';

import './BurgerView.scss';

const BurgerView = ({ ingredients }) => {
  return (
    <div className="burger-view py-1 mg-0-auto">
      <BurgerIngredients ingredients={ingredients} />
    </div>
  );
};

export default BurgerView;
