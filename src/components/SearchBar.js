import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    // Call the onSearch function with the current query
    onSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // this won't reload the page after hitting enter
    onSearch(query);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={handleSearchChange}
        className="search-input"
      />
    </form>
  );
}

export default SearchBar;
