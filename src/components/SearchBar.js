import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    // Call the onSearch function with the current query
    onSearch(value);
  };

  return (
    <form className="search-form">
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
