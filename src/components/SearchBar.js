import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  // Set term from event handler
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  // Prevent broswer from submiting automatically
  onFormSubmit = (event) => {
    event.preventDefault();

    // Call callback function from parent component
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment" style={{ marginTop: '10px' }}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field"></div>
          <label>Video Search</label>
          <input
            type="text"
            value={this.state.term}
            // Event Handler
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
