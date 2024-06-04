import React from 'react';
import BookCard from './BookCard';

function Bookshelf() {
  const bookKeys = Object.keys(localStorage);

  return (
    <div className="bookshelf">
      <h2>My Bookshelf</h2>
      {bookKeys.length > 0 ? (
        bookKeys.map((key) => {
          const bookData = localStorage.getItem(key);
          if (bookData) {
            const book = JSON.parse(bookData);
            return <BookCard key={key} book={book} />;
          } else {
            return null;
          }
        })
      ) : (
        <p>Your bookshelf is empty.</p>
      )}
    </div>
  );
}

export default Bookshelf;
