import "./Homepage.scss";
import Nav from "../../components/Nav/Nav";
import CocktailCard from "../../components/CocktailCard/CocktailCard";

function Homepage() {
  return (
    <section className="Homepage__container">
      <Nav />
      <section className="Homepage__picture" />
      <section className="Homepage__title">
        <hr className="dividing__line" />
        <h1 className="Homepage__title--text">Toutes nos recettes Easy</h1>
        <hr className="dividing__line" />
      </section>
      <CocktailCard />
    </section>
  );
}

export default Homepage;
