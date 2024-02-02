import "./Homepage.scss";
import { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import CocktailCard from "../../components/CocktailCard/CocktailCard";

function HomepageMocktail() {
  const [mocktail, setMoctail] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/mocktail`)
      .then((response) => response.json())
      .then((data) => setMoctail(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <section className="Homepage__container">
      <Nav />
      <section className="Homepage__picture" />
      <section className="Homepage__title">
        <hr className="dividing__line" />
        <h1 className="Homepage__title--text">
          Tous nos Mocktails Easy, sans alcool
        </h1>
        <hr className="dividing__line" />
      </section>
      <section className="Homepage__card">
        {mocktail &&
          mocktail.map((card) => (
            <CocktailCard
              key={card.cocktail_id}
              image={card.img}
              title={card.nom_cocktail}
              id={card.cocktail_id}
            />
          ))}
      </section>
    </section>
  );
}

export default HomepageMocktail;
