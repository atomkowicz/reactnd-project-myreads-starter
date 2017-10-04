import React from 'react'
import { getAll, update } from './BooksAPI';
import './App.css'
import BookList from './BookList'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: false,
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    getAll().then(books => {
      this.setState({
        books
      })
    });
  }

  onChangeShelf(book, shelf) {
    update(book, shelf).then(
      this.getBooks()
    );
  }

  render() {
    return (
      <div className="app">
        <div className="list-books-title">
          <h1>{this.state.isUpdating}</h1>
        </div>
        <BookList
          books={this.state.books}
          onChangeShelf={(book, shelf) => this.onChangeShelf(book, shelf)} />
      </div>
    )
  }
}

export default BooksApp
