import React, { Component } from 'react';
import { search } from './BooksAPI';
import { Link } from 'react-router-dom';
import Book from './Book';

class BookSearch extends Component {

    state = {
        books: [],
        error: ""
    }


    handleChange = (e) => {
        if (e.key === "Enter") {
            const maxResults = 10;
            const query = e.target.value;

            search(query, maxResults).then(books => {
                this.setState({
                    books: books.error ? [] : books,
                    error: books.error ? "No results" : ""
                })
            });
        }
    }

    render() {
        const { shelves, onChangeShelf } = this.props;
        const { books, error } = this.state;


        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search books" onKeyPress={(e) => (this.handleChange(e))} />
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
                                    uncategorized={true}
                                />))
                        }

                        {error && <div>No results</div>}

                    </ol>
                </div>
            </div>
        )
    }
}

export default BookSearch;