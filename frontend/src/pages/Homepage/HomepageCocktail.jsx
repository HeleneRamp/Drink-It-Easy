import "./Homepage.scss";
import { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import CocktailCard from "../../components/CocktailCard/CocktailCard";

function HomepageCocktail() {
  const [cocktails, setCoctails] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cocktail`)
      .then((response) => response.json())
      .then((data) => setCoctails(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <section id="top" className="Homepage__container">
      <Nav />
      <section className="Homepage__picture" />
      <section className="Homepage__title">
        <hr className="dividing__line" />
        <h1 className="Homepage__title--text">
          Tous nos Cocktails Easy, avec alcool
        </h1>
        <hr className="dividing__line" />
      </section>
      <section className="Homepage__card">
        {cocktails &&
          cocktails.map((card) => (
            <CocktailCard
              key={card.cocktail_id}
              image={card.img}
              title={card.nom_cocktail}
              id={card.cocktail_id}
            />
          ))}
      </section>
      <section className="Homepage__btn--goUp">
        <a href="#top">
          <img
            className="Homepage__arrow"
            src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/arrow.png`}
            alt="haut de page"
          />
          <p>Haut de page.</p>
        </a>
      </section>
    </section>
  );
}

export default HomepageCocktail;
