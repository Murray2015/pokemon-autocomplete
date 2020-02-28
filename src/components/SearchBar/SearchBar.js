import React, { useEffect } from "react";
import css from "./SearchBar.module.css";

function SearchBar({
  handleEnteredSearch,
  searchTerm,
  getChosenPokemon,
  setResult
}) {
  return (
    <div>
      <input
        className={css.input}
        onChange={handleEnteredSearch}
        value={searchTerm}
      />
      <button className={css.button} onClick={getChosenPokemon}>
        I Choose You!
      </button>
    </div>
  );
}

export default SearchBar;
