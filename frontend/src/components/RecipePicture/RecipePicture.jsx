import "./RecipePicture.scss";
import PropTypes from "prop-types";

function RecipePicture({ title, image }) {
  return (
    <section className="RecipePicture">
      <section className="RecipePicture__container">
        <h1 className="RecipePicture__title">{title}</h1>
        <img
          className="RecipePicture__image"
          src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${image}`}
          alt="cocktail"
        />
      </section>
    </section>
  );
}

RecipePicture.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default RecipePicture;
