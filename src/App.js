import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import BookCard from './components/BookCard';
import Bookshelf from './components/Bookshelf';

function App() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');
  const [showBookshelf, setShowBookshelf] = useState(false);

  // Function to handle search
  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery);
    if (searchQuery) {
      const response = await fetch(`https://openlibrary.org/search.json?q=${searchQuery}&limit=10`);
      const data = await response.json();
      setBooks(data.docs || []);
    } else {
      setBooks([]);
    }
  };

  // Function to toggle bookshelf visibility
  const toggleBookshelf = () => {
    setShowBookshelf(!showBookshelf);
  };

  // Cleanup local storage on component unmount or re-render
  useEffect(() => {
    return () => {
      localStorage.clear(); 
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <button onClick={toggleBookshelf} className="bookshelf-button">
        {showBookshelf ? "Search Books" : "My Bookshelf"}
      </button>
      {showBookshelf ? (
        <Bookshelf />
      ) : (
        <>
          <SearchBar 
            onSearch={handleSearch} 
          />
          <div className="book-list">
            {books.map(book => (
              <BookCard key={book.key} book={book} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
