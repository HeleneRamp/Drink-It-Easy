import "./RecipePage.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import RecipePicture from "../../components/RecipePicture/RecipePicture";
import RecipeIngredient from "../../components/RecipeIngredient/RecipeIngredient";
import RecipeAccessories from "../../components/RecipeAccessories/RecipeAccessories";
import RecipeDescription from "../../components/RecipeDescription/RecipeDescription";
import RecipeBoard from "../../components/RecipeBoard/RecipeBoard";

function RecipePage() {
  const [cocktailId, setCocktailId] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cocktail/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCocktailId(data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <section className="RecipePage">
      <Nav />
      <section className="RecipePage__body">
        <section className="RecipePage__body--left">
          {cocktailId && (
            <RecipePicture
              title={cocktailId.nom_cocktail}
              image={cocktailId.img}
            />
          )}
        </section>
        <section className="RecipePage__body--right">
          <section className="RecipePage__body--rightTop">
            {cocktailId && (
              <>
                <RecipeIngredient
                  ingr1={cocktailId.ingr_1}
                  ingr2={cocktailId.ingr_2}
                  ingr3={cocktailId.ingr_3}
                  ingr4={cocktailId.ingr_4}
                  ingr5={cocktailId.ingr_5}
                />
                <RecipeAccessories
                  mat1={cocktailId.materiel_1}
                  mat2={cocktailId.materiel_2}
                  mat3={cocktailId.materiel_3}
                  mat4={cocktailId.materiel_4}
                />
              </>
            )}
          </section>
          <section className="RecipePage__body--rightBottom">
            {cocktailId && (
              <>
                <RecipeDescription realise={cocktailId.realisation} />
                <RecipeBoard board={cocktailId.conseil} />
              </>
            )}
          </section>
        </section>
      </section>
    </section>
  );
}

export default RecipePage;
