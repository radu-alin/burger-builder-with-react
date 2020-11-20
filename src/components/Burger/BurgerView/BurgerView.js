import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';

import './BurgerView.scss';

const BurgerView = ({ ingredients }) => {
  return (
    <div className="burger-view mg-auto">
      <BurgerIngredients ingredients={ingredients} />
    </div>
  );
};

export default BurgerView;
