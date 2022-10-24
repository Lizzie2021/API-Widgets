import React, { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <form className="form-floating mb-3 " onSubmit={onFormSubmit}>
      <input
        className="form-control"
        type="text"
        id="floatingInput"
        placeholder="Search item"
        value={term}
        onChange={onInputChange}
      />
      <label htmlFor="floatingInput">Please input your search item... </label>
    </form>
  );
}

export default SearchBar;
