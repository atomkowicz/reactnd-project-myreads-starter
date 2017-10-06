import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {

    const NO_COVER_LINK = "http://via.placeholder.com/128x193?text=No%20Cover";

    const {
        book,
        shelves,
        onChangeShelf,
        userBooks
      } = props;

    const smallThumbnail = book.imageLinks ? book.imageLinks.smallThumbnail : NO_COVER_LINK ;
    var selectedOption = "none";

    if (book.shelf) {
        selectedOption = book.shelf;
    }

    if (userBooks) {
        const userBook = userBooks.find((b) => (b.id === book.id))
        if (userBook) {
            selectedOption = userBook.shelf;
        }
    }

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${smallThumbnail}` }} ></div>
                    <div className="book-shelf-changer">
                        <select value={selectedOption} onChange={(e) => onChangeShelf(book, e.target.value)}>
                            <option value="move" disabled>Move to...</option>
                            {shelves.map(shelf => (
                                <option key={shelf} value={shelf}>{shelf}</option>
                            ))}
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors ? book.authors.join(", ") : ""}</div>
            </div>
        </li>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    shelves: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired
}

export default Book;