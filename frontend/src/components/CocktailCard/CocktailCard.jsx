import { Link } from "react-router-dom";
import "./CocktailCard.scss";
import PropTypes from "prop-types";
import { useState } from "react";

function CocktailCard({ image, title, id }) {
  const [setCocktailById] = useState();

  return (
    <section className="CocktailCard__container">
      <Link
        className="CocktailCard__link"
        onClick={() => setCocktailById(id)}
        to={`/${id}`}
      >
        <img
          className="CocktailCard__container--image"
          src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${image}`}
          alt="cocktail"
        />
        <h3 className="CocktailCard__container--text">{title}</h3>
      </Link>
    </section>
  );
}

CocktailCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default CocktailCard;
