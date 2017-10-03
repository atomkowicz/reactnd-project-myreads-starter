import React from 'react'
import { getAll } from './BooksAPI';
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
    showSearchPage: false
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


  render() {

    
    return (
      <div className="app">
        <BookList allBooks={this.state.books} />
      </div>
    )
  }
}

export default BooksApp
