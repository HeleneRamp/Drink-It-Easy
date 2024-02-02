import PropTypes from "prop-types";
import "./RecipeDescription.scss";

function RecipeDescription({ realise }) {
  return (
    <section className="RecipeDescription__container">
      <h1 className="RecipeDescription__container--title">
        Élaboration du Cocktail:
      </h1>
      <section className="RecipeDescription__container--desc">
        <p className="RecipeDescription__container--text">{realise}</p>
      </section>
    </section>
  );
}
RecipeDescription.propTypes = {
  realise: PropTypes.string.isRequired,
};
export default RecipeDescription;
