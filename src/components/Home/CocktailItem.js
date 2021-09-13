import { Link } from "react-router-dom";

function CocktailItem({ item }) {
  return (
    <article id="cocktail-item">
      <img className="img-cocktail" src={item.strDrinkThumb} alt="cocktail" />
      <div className="cocktail-details">
        <h3>{item.strDrink}</h3>
        <h4>{item.strGlass}</h4>
        <p>{item.strAlcoholic}</p>
        <Link to={`/cocktail/${item.idDrink}`}>
          <button className="details-btn">DETAILS</button>
        </Link>
      </div>
    </article>
  );
}

export default CocktailItem;
