import { Link, useLocation } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  const location = useLocation();

  return (
    <section className="Nav__container">
      <section className="Nav__appLogo">
        <Link to="/">
          <img
            className="Nav__appLogo--image"
            src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/logo.png`}
            alt="logo"
          />
        </Link>
        <h1 className="Nav__appLogo--title">Drink It Easy</h1>
      </section>
      <ul className="Nav__list__filters">
        <section className="Nav__list__filters--cocktails">
          <Link to="/">
            <li>
              <h1 className="Nav__list__filters--title coktail">
                {location.pathname !== "/" && location.pathname !== "/mocktail"
                  ? ""
                  : "Les Cocktails"}
              </h1>
            </li>
          </Link>
          <Link to="/mocktail">
            <li>
              <h1 className="Nav__list__filters--title mocktail">
                {location.pathname !== "/" && location.pathname !== "/mocktail"
                  ? ""
                  : "Les Mocktails"}
              </h1>
            </li>
          </Link>
        </section>
        <li>
          <h1 className="Nav__list__filters--title">Les Accessoires</h1>
        </li>
      </ul>
    </section>
  );
}

export default Nav;
