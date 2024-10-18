import Ingredient from './Ingredient';

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <ul>
      {stack.length === 0 ? (
        <p>No Ingredients</p>
      ) : (
        stack.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            handleClick={() => removeFromBurger(index)}
            buttonText="X"
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
