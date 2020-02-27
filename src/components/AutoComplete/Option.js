import React from "react";

function Option({ option, handleEnteredSearch }) {
  return <li onClick={handleEnteredSearch}>{option}</li>;
}

export default Option;
