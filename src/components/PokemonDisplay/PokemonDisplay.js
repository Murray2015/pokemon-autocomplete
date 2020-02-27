import React from "react";

function PokemonDisplay({ result }) {
  //   const selectedPokemon = data.filter(poke => poke.name === result)[0];
  //   console.log(selectedPokemon);
  return (
    <div>
      <img src={result.img_url} alt={result.name} />
      <h2>{result.name}</h2>
      <p>{result.description}</p>
    </div>
  );
}

export default PokemonDisplay;
