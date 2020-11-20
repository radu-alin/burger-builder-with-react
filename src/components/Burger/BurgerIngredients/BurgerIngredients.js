import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import './BurgerIngredients.scss';

const BurgerIngredients = ({ ingredients }) => {
  const transformedIngredients = Object.keys(ingredients).map((igKey) => {
    return [...Array(ingredients[igKey])].map((_, i) => (
      <BurgerIngredient key={igKey + i} type={igKey} />
    ));
  });
  return (
    <div className="burger-ingredients py-1 mg-auto">
      <BurgerIngredient type={'bread-top'} />
      {transformedIngredients}
      <BurgerIngredient type={'bread-bottom'} />
    </div>
  );
};

export default BurgerIngredients;
