import "./RecipeAccessories.scss";
import PropTypes from "prop-types";

function RecipeAccessories({ mat1, mat2, mat3, mat4 }) {
  return (
    <section className="RecipeAccessories__container">
      <h1 className="RecipeAccessories__container--title">
        Le matériel nécessaire:
      </h1>
      <section className="RecipeAccessories__container--list">
        <p className="materiel__list">{mat1 === null ? "" : `◼ ${mat1}`}</p>
        <p className="materiel__list">{mat2 === null ? "" : `◼ ${mat2}`}</p>
        <p className="materiel__list">{mat3 === null ? "" : `◼ ${mat3}`}</p>
        <p className="materiel__list">{mat4 === null ? "" : `◼ ${mat4}`}</p>
      </section>
    </section>
  );
}

RecipeAccessories.propTypes = {
  mat1: PropTypes.string.isRequired,
  mat2: PropTypes.string.isRequired,
  mat3: PropTypes.string.isRequired,
  mat4: PropTypes.string.isRequired,
};

export default RecipeAccessories;
