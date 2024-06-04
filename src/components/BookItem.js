import React from 'react';

function BookItem({ book }) {
  return (
    <div className="book-item">
      <h3>{book.title}</h3>
      <p>{book.author_name && book.author_name.join(', ')}</p>
      <p>{book.first_publish_year}</p>
    </div>
  );
}

export default BookItem;
