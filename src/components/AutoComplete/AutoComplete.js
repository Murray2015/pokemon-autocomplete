import React, { useState, useEffect } from "react";
import Option from "./Option.js";

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
    <ul>
      {options.map(option => {
        if (option) {
          return (
            <Option
              option={option}
              handleEnteredSearch={handleEnteredSearch}
              //   key={option.name}
            />
          );
        }
      })}
    </ul>
  );
}

export default AutoComplete;
