import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';


const BookList = (props) => {
  const { books, onChangeShelf, shelves } = props;
  
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>

          {shelves.map((shelf) => (
            <BookShelf key={shelf}
              shelf={shelf}
              shelves={shelves}
              books={books.filter(book => book.shelf === shelf)}
              onChangeShelf={onChangeShelf} />
          ))}

        </div>
      </div>
    </div>
  )
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default BookList;