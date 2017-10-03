import React from 'react';
import Book from './Book'

const BookShelf = (props) => {

  let { shelf, books, onChangeShelf } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.length > 0 &&
            books.map(book =>
              <Book key={book.id}
                bookDetails={book}
                onChangeShelf={onChangeShelf} />)
          }
        </ol>
      </div>
    </div>
  )
}

export default BookShelf;