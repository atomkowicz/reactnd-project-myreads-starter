import React, { Component } from 'react';
import { search } from './BooksAPI';
import { Link } from 'react-router-dom';
import Book from './Book';

class BookSearch extends Component {

    state = {
        books: []
    }


    handleChange = (e) => {
        const maxResults = 3;
        const query = e.target.value;

        search(query, maxResults).then(books => {
            this.setState({
                books
            })
        });
    }

    render() {
        const { shelves, onChangeShelf } = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text" placeholder="Search by title or author" onBlur={(e) => this.handleChange(e)} />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.map((book) => (
                            <Book
                                key={book.id}
                                book={book}
                                shelves={shelves}
                                onChangeShelf={onChangeShelf}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookSearch;