import './BurgerIngredient.scss';

const BurgerIngredient = ({ type }) => {
  let ingredient = null;

  switch (type) {
    case 'bread-bottom':
      ingredient = <div className="bread-bottom"></div>;
      break;
    case 'bread-top':
      ingredient = (
        <div className="bread-top">
          <div className="seeds1"></div>
          <div className="seeds2"></div>
        </div>
      );
      break;
    case 'bacon':
      ingredient = <div className="bacon"></div>;
      break;
    case 'cheese':
      ingredient = <div className="cheese"></div>;
      break;
    case 'meat':
      ingredient = <div className="meat"></div>;
      break;
    case 'salad':
      ingredient = <div className="salad"></div>;
      break;

    default:
      return ingredient;
  }

  return ingredient;
};

export default BurgerIngredient;
