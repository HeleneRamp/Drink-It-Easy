import "./RecipeIngredient.scss";
import PropTypes from "prop-types";

function RecipeIngredient({ ingr1, ingr2, ingr3, ingr4, ingr5 }) {
  return (
    <section className="RecipePage__ingredient--container">
      <h1 className="RecipePage__body__title">Les ingrédients:</h1>
      <section className="RecipePage__ingredient--list">
        <p className="ingr__list">{`◼ ${ingr1}`}</p>
        <p className="ingr__list">{`◼ ${ingr2}`}</p>
        <p className="ingr__list">{`◼ ${ingr3}`}</p>
        <p className="ingr__list">{ingr4 === null ? "" : `◼ ${ingr4}`}</p>
        <p className="ingr__list">{ingr5 === null ? "" : `◼ ${ingr5}`}</p>
      </section>
    </section>
  );
}

RecipeIngredient.propTypes = {
  ingr1: PropTypes.string.isRequired,
  ingr2: PropTypes.string.isRequired,
  ingr3: PropTypes.string.isRequired,
  ingr4: PropTypes.string.isRequired,
  ingr5: PropTypes.string.isRequired,
};

export default RecipeIngredient;
