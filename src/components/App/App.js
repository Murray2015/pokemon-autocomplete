import React, { useState } from "react";
import "./App.css";
import headerImg from "./header_text.png";
import SearchBar from "../SearchBar/SearchBar";
import AutoComplete from "../AutoComplete/AutoComplete";
import PokemonDisplay from "../PokemonDisplay/PokemonDisplay";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  function handleEnteredSearch(e) {
    setSearchTerm(e.target.value || e.target.innerText);
    console.log("term: ", searchTerm);
    setResult("");
  }

  function getChosenPokemon() {
    fetch(`http://localhost:5000/pokemon?name=${searchTerm}`)
      .then(res => res.json())
      .then(data => {
        setResult(data);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <header>
        <img style={{ width: "90%" }} src={headerImg} />
      </header>
      <SearchBar
        handleEnteredSearch={handleEnteredSearch}
        searchTerm={searchTerm}
        setResult={setResult}
        getChosenPokemon={getChosenPokemon}
      />
      {!result && (
        <AutoComplete
          searchTerm={searchTerm}
          handleEnteredSearch={handleEnteredSearch}
        />
      )}
      {result && <PokemonDisplay result={result} />}
    </div>
  );
}

export default App;
