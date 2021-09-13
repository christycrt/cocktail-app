import { useEffect, useState } from "react";
import Cocktail from "../components/Home/Cocktail";
import Searchbox from "../components/Home/Searchbox";
import "../styles/pages/Home.scss";
import axios from "axios";
import Loading from "../components/common/Loading";

function Home() {
  const [cocktailList, setCocktailList] = useState([]);
  const [searchCocktail, setSearchCocktail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let fetchCocktail = setTimeout(() => {
      setLoading(true);
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchCocktail}`
        )
        .then(function (response) {
          // handle success
          console.log(response.data.drinks);
          setCocktailList(response.data.drinks);
          setLoading(false);
        });
    }, 500);
    return () => {
      clearTimeout(fetchCocktail);
    };
  }, [searchCocktail]);

  return (
    <div id="home">
      <Searchbox searchCocktail={{ searchCocktail, setSearchCocktail }} />
      <h2 className="cocktail-title">Cocktails</h2>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <Cocktail cocktailList={cocktailList} />
      )}
    </div>
  );
}

export default Home;
