import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';

import './BurgerView.scss';

const BurgerView = ({ ingredients }) => (
  <section id="BurgerView" className="bg-gray-main">
    <div className="burger-view py-1 mg-56px-auto">
      <BurgerIngredients ingredients={ingredients} />
    </div>
  </section>
);

export default BurgerView;
