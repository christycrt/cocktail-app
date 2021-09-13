function Searchbox({ searchCocktail }) {
  return (
    <section id="section-search">
      <form className="search-form">
        <div className="form-text">
          <label for="cocktail">Search Your Favorite Cocktail</label>
          <input type="text" id="cocktail" value={searchCocktail.searchCocktail} onChange={(e) => searchCocktail.setSearchCocktail(e.target.value)} />
        </div>
      </form>
    </section>
  );
}

export default Searchbox;
