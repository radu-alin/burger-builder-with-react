import { memo } from 'react';

import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';

import './BurgerView.scss';

const BurgerView = ({ ingredients, size }) => {
  // size options: small, large
  const classes = `burger-view ${size}`;
  return (
    <section id="BurgerView" className="bg-gray-main">
      <div className="container py-1">
        <div className={classes}>
          <BurgerIngredients ingredients={ingredients} />
        </div>
      </div>
    </section>
  );
};

export default memo(BurgerView);
