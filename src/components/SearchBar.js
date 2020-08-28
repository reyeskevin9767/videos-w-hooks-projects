import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

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
          onChange={(event) => setTerm(event.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
