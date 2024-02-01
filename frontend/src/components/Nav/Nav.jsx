import "./Nav.scss";

function Nav() {
  return (
    <section className="Nav__container">
      <section className="Nav__appLogo">
        <img
          className="Nav__appLogo--image"
          src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/logo.png`}
          alt="logo"
        />
        <h1 className="Nav__appLogo--title">Drink It Easy</h1>
      </section>
      <ul className="Nav__list__filters">
        <section className="Nav__list__filters--cocktails">
          <li>
            <h1 className="Nav__list__filters--title">Les Cocktails</h1>
          </li>
          <li>
            <h1 className="Nav__list__filters--title">Les Mocktails</h1>
          </li>
        </section>
        <li>
          <h1 className="Nav__list__filters--title">Les Accessoires</h1>
        </li>
      </ul>
    </section>
  );
}

export default Nav;
