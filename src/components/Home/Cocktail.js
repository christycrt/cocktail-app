import CocktailItem from "./CocktailItem";

function Cocktail({ cocktailList }) {
  return (
    <section id="section-cocktail">
      {cocktailList ? (
        <>
          <div className="row">
            {cocktailList.map((item, key) => {
              return (
                <div key={key} className="col-12 col-lg-4">
                  <CocktailItem item={item} />
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className="no-match-text">
          no cocktails matched your search criteria
        </div>
      )}
    </section>
  );
}

export default Cocktail;
