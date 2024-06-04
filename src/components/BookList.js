import React from 'react';
import BookItem from './BookItem';

function BookList({ books }) {
  return (
    <div className="book-list">
      {books.length ? (
        books.map((book) => <BookItem key={book.key} book={book} />)
      ) : (
        <p>No books found</p>
      )}
    </div>
  );
}

export default BookList;
