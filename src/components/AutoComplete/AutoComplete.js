import React, { useState, useEffect } from "react";
import Option from "./Option.js";
import css from "./AutoComplete.module.css";

function AutoComplete({ searchTerm, handleEnteredSearch }) {
  const [options, setOption] = useState([""]);

  useEffect(() => {
    fetch(`http://localhost:5000/pokemon?search=${searchTerm}`)
      .then(res => res.json())
      .then(data => {
        const dataNames = data.map(x => x.name);
        setOption(dataNames);
      });
  }, [searchTerm]);

  return (
    <ul className={css.pokemonAutoCompleteList}>
      {options.sort().map(option => {
        if (option) {
          return (
            <Option
              option={option}
              handleEnteredSearch={handleEnteredSearch}
              key={option.name}
            />
          );
        }
      })}
    </ul>
  );
}

export default AutoComplete;
