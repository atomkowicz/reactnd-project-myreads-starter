import React, { Component } from 'react';
import { search } from './BooksAPI';
import { Link } from 'react-router-dom';
import Book from './Book';
import PropTypes from 'prop-types';

class BookSearch extends Component {

    state = {
        books: [],
        error: ""
    }

    onTextChange = (e) => {
        const query = e.target.value;

        if (query) {
            search(query, 10).then(books => {
                this.setState({
                    books: books.error ? [] : books,
                    error: books.error ? "No results" : ""
                })
            });
        } else {
            this.setState({
                books: []
            })
        }
    }
    
    render() {
        const { shelves, onChangeShelf, userBooks } = this.props;
        const { books, error } = this.state;


        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search books"
                            onChange={(e) => this.onTextChange(e)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {!error &&
                            books.map((book) => (
                                <Book
                                    key={book.id}
                                    book={book}
                                    shelves={shelves}
                                    onChangeShelf={onChangeShelf}
                                    userBooks={userBooks}
                                />))
                        }
                        {error && <div>No results</div>}
                    </ol>
                </div>
            </div>
        )
    }
}

BookSearch.propTypes = {
    shelves: PropTypes.array.isRequired,
    userBooks: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

export default BookSearch;