import React from "react";

function PokemonDisplay({ result }) {
  return (
    <div>
      <img src={result.img_url} alt={result.name} />
      <h2>{result.name}</h2>
      <p>{result.description}</p>
    </div>
  );
}

export default PokemonDisplay;
