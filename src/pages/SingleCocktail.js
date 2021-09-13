import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/pages/SingleCocktail.scss";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/common/Loading";

function SingleCocktail() {
  let { id } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(function (response) {
        if (response.data.drinks) {
          let ingredients = [];
          for (let index = 0; index < 15; index++) {
            let ingredient =
              response.data.drinks[0]["strIngredient" + (index + 1)];
            if (ingredient) {
              ingredients.push(ingredient);
            }
          }
          response.data.drinks[0].strIngredients = ingredients.join(", ");
          setDetails(response.data.drinks[0]);
        }
        setLoading(false);
      });
  }, [id]);

  return (
    <section id="section-single-cocktail">
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <>
          <div className="btn-layout">
            <Link to="/">
              <button className="back-btn">BACK HOME</button>
            </Link>
          </div>
          {details ? (
            <div className="cocktail">
              <h3 className="cocktail-name">{details.strDrink}</h3>
              <div className="row">
                <div className="col-5">
                  <img
                    className="img-single-cocktail"
                    src={details.strDrinkThumb}
                    alt={details.strDrink}
                  />
                </div>
                <div className="col-7 cocktail-overall">
                  <div className="detail-cocktail">
                    <p>
                      <span className="drinks-info">Name :</span>
                      {details.strDrink}
                    </p>
                    <p>
                      <span className="drinks-info">Category :</span>
                      {details.strCategory}
                    </p>
                    <p>
                      <span className="drinks-info">Info :</span>
                      {details.strAlcoholic}
                    </p>
                    <p>
                      <span className="drinks-info">Glass :</span>
                      {details.strGlass}
                    </p>
                    <p>
                      <span className="drinks-info">Instructons :</span>
                      {details.strInstructions}
                    </p>
                    <p className="mb-0">
                      <span className="drinks-info">Ingredients :</span>
                      {details.strIngredients}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="no-cocktail-text">no cocktail to display</div>
          )}
        </>
      )}
    </section>
  );
}

export default SingleCocktail;
