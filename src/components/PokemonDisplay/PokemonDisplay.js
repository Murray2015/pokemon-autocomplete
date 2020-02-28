import React from "react";
import css from "./PokemonDisplay.module.css";

function PokemonDisplay({ result }) {
  var evolvesTo = {};
  try {
    evolvesTo = JSON.parse(result.evolutions);
    console.log("evo", evolvesTo.to);
  } catch (err) {
    console.log(err);
  }
  return (
    <div className={css.pokemonTextCard + " " + css.rotateCenter}>
      <img className={css.pokemonImg} src={result.img_url} alt={result.name} />
      <h2 className={css.pokemonH1}>{result.name}</h2>
      <p>
        <span style={{ fontWeight: "bold" }}>ID: </span>
        {result.id}
      </p>
      <ul>
        <span style={{ fontWeight: "bold" }}>Types:</span>
        {result.types.map(type => (
          <span>{` ${type} `}</span>
        ))}
      </ul>
      {evolvesTo.to && (
        <p>
          <span style={{ fontWeight: "bold" }}>Evolves to: </span>
          {evolvesTo.to}
        </p>
      )}
      <p>
        <span style={{ fontWeight: "bold" }}>Description: </span>
        {result.description}
      </p>
    </div>
  );
}

export default PokemonDisplay;
