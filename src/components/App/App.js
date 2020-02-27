import React, { useState } from "react";
import logo from "./logo.svg";
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
