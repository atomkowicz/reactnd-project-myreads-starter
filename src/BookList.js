import React, { Component } from 'react'
import BookShelf from './BookShelf'


const BookList = (props) => {
  let { allBooks } = props;
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
            <BookShelf
              shelf={shelf}
              books={allBooks.filter(book => book.shelf === shelf)} />
          ))}

        </div>
      </div>
    </div>
  )
}

export default BookList;