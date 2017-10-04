import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookShelf = (props) => {

  let { shelf, shelves, books, onChangeShelf } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.length > 0 &&
            books.map(book =>
              <Book
                key={book.id}
                book={book}
                shelves={shelves}
                onChangeShelf={onChangeShelf} />)
          }
        </ol>
      </div>
    </div>
  )
}

BookShelf.PropTypes = {
  shelf: PropTypes.string.isRequired,
  shelves: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default BookShelf;