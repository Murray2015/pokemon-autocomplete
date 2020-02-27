import React, { useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import AutoComplete from "../AutoComplete/AutoComplete";
import PokemonDisplay from "../PokemonDisplay/PokemonDisplay";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  function handleEnteredSearch(e) {
    setSearchTerm(e.target.value || e.target.innerText);
  }

  return (
    <div className="App">
      <SearchBar
        handleEnteredSearch={handleEnteredSearch}
        searchTerm={searchTerm}
        setResult={setResult}
      />
      <AutoComplete
        searchTerm={searchTerm}
        handleEnteredSearch={handleEnteredSearch}
      />
      {result && <PokemonDisplay result={result} />}
    </div>
  );
}

export default App;
