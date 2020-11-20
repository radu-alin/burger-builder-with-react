import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import './BurgerIngredients.scss';

const BurgerIngredients = ({ ingredients }) => {
  let transformedIngredients = Object.keys(ingredients).map((igKey) => {
    return [...Array(ingredients[igKey])].map((_, i) => (
      <BurgerIngredient key={igKey + i} type={igKey} />
    ));
  });

  const ingredientsSum = transformedIngredients.reduce((arr, el) => {
    return arr.concat(el);
  }, []);

  console.log(ingredientsSum.length);

  if (ingredientsSum.length === 0) {
    transformedIngredients = (
      <p className="p-1">Please start adding ingredients !!!</p>
    );
  }

  console.log(ingredientsSum);
  return (
    <div className="burger-ingredients py-1 mg-auto">
      <BurgerIngredient type={'bread-top'} />
      {transformedIngredients}
      <BurgerIngredient type={'bread-bottom'} />
    </div>
  );
};

export default BurgerIngredients;
