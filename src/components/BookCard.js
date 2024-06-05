import React from 'react';
import AddButton from './AddButton';

function BookCard({ book }) {
  const handleAddToLocalStorage = () => {
    // Store the book information in local storage
    localStorage.setItem(book.key, JSON.stringify(book));
    // console.log(localStorage)
  };

  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>Author(s): {book.author_name && book.author_name.join(', ')}</p>
      <p>First Publish Year: {book.first_publish_year}</p>
      <AddButton onClick={handleAddToLocalStorage} />
    </div>
  );
}

export default BookCard;
