import './Order.scss';

const Order = ({ ingredients, totalPrice, orderDate }) => {
  const ingredientsArray = [];

  for (let ingredientName in ingredients) {
    ingredientsArray.push({
      name: ingredientName,
      amount: ingredients[ingredientName],
    });
  }

  const ingredientOutput = ingredientsArray.map((ing) => (
    <span key={ing.name}>
      {ing.name} - {ing.amount},
    </span>
  ));

  return (
    <div id="Order" className="order bg-brown-main my-1">
      <p>
        <strong>Date: </strong>
        {orderDate}
      </p>
      <p>
        <strong>Ingredients:</strong> {ingredientOutput}{' '}
      </p>
      <p>
        <strong>Price: &#8364; {totalPrice.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;
