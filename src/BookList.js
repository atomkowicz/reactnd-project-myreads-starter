import React from 'react'
import BookShelf from './BookShelf'


const BookList = (props) => {
  const { allBooks, onChangeShelf } = props;
  let shelfs = [];

  if (allBooks.length)
    shelfs = [...new Set(allBooks.map(book => book.shelf))]

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>

          {shelfs.map((shelf) => (
            <BookShelf key={shelf}
              shelf={shelf}
              books={allBooks.filter(book => book.shelf === shelf)} 
              onChangeShelf={onChangeShelf}/>
          ))}

        </div>
      </div>
    </div>
  )
}

export default BookList;