import { availableIngredients } from "../App";
import Ingredient from "./Ingredient";

const IngredientList = ({ addToBurger }) => {
  return (
    <ul>
      {availableIngredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          handleClick={() => addToBurger(ingredient)}
          buttonText="+"
        />
      ))}
    </ul>
  );
};

export default IngredientList;
