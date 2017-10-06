import React from 'react';
import { getAll, update } from './BooksAPI';
import { Route, Link } from 'react-router-dom';
import './App.css';
import BookList from './BookList';
import BookSearch from './BookSearch';

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    getAll().then((books) => {
      this.setState({
        books
      })
    });
  }

  onChangeShelf = (book, shelf) => {
    update(book, shelf).then(() => console.log(`Book has been updated: ${book.id}`));

    let books = this.state.books;
    let foundbook = books.find((b)=>(b.id === book.id));
    
    if (foundbook) {
      foundbook.shelf = shelf;
    } else {
      books.push(book);
      book.shelf = shelf
    }

    this.setState({
      books
    })
  }

  render() {
    const shelves = ["currentlyReading", "wantToRead", "read"];
    let { books } = this.state;

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div>
            <BookList
              books={books}
              shelves={shelves}
              onChangeShelf={(book, shelf) => {
                this.onChangeShelf(book, shelf);
              }} />
            <div className="open-search">
              <Link to="/search" className="search-books">Add a book</Link>
            </div>
          </div>
        )} />

        <Route path="/search" render={() => (
          <BookSearch
            shelves={shelves}
            userBooks={books}
            onChangeShelf={(book, shelf) => {
              this.onChangeShelf(book, shelf)
            }}
          />
        )} />

      </div>
    )
  }
}

export default BooksApp