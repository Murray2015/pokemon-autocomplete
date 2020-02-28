import React from "react";
import css from "./PokemonDisplay.module.css";

function PokemonDisplay({ result }) {
  console.log(result);
  return (
    <div>
      <div className={css.pokemonTextCard}>
        <img
          className={css.pokemonImg}
          src={result.img_url}
          alt={result.name}
        />
        <h2 className={css.pokemonH1}>{result.name}</h2>
        <p>ID: {result.id}</p>
        <p>Types: {result.types}</p>
        <p>{result.description}</p>
      </div>
    </div>
  );
}

export default PokemonDisplay;
