import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';

import './BurgerView.scss';

const BurgerView = ({ ingredients }) => {
  return (
    <div className="burger-view p-1 mg-auto">
      <BurgerIngredients ingredients={ingredients} />
    </div>
  );
};

export default BurgerView;
