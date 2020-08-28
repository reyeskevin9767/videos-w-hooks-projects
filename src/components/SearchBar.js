import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  // Set term from event handler
  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  // Prevent broswer from submiting automatically
  const onSubmit = (event) => {
    event.preventDefault();

    // Call callback function from parent component
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment" style={{ marginTop: '10px' }}>
      <form onSubmit={onSubmit} className="ui form">
        <div className="field"></div>
        <label>Video Search</label>
        <input
          type="text"
          value={term}
          // Event Handler
          onChange={onInputChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
