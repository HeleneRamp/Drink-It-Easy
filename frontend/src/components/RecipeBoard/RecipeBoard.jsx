import "./RecipeBoard.scss";
import PropTypes from "prop-types";

function RecipeBoard({ board }) {
  return (
    <section className="RecipeBoard__container">
      <h1 className="RecipeBoard__container--title">
        Conseils de préparation:
      </h1>
      <section className="RecipeBoard__container--desc">
        <p className="RecipeBoard__container--text">{board}</p>
      </section>
    </section>
  );
}

RecipeBoard.propTypes = {
  board: PropTypes.string.isRequired,
};
export default RecipeBoard;
