import React, { useEffect } from "react";

function SearchBar({
  handleEnteredSearch,
  searchTerm,
  getChosenPokemon,
  setResult
}) {
  useEffect(() => {
    fetch(`http://localhost:5000/pokemon?name=${searchTerm}`)
      .then(res => res.json())
      .then(data => {
        setResult(data);
      });
  }, [searchTerm]);
  return (
    <div>
      <input onChange={handleEnteredSearch} value={searchTerm} />
      <button onClick={getChosenPokemon}>I Choose You!</button>
    </div>
  );
}

export default SearchBar;
