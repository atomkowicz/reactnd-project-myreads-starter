import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {

    const {
        book,
        shelves,
        onChangeShelf,
        selected
      } = props;

    const { smallThumbnail } = book.imageLinks;
    const selectedOption = selected === "none"? "none":book.shelf;

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
                <div className="book-authors">{book.authors? book.authors.join(", "):""}</div>
            </div>
        </li>
    )
}

Book.PropTypes = {
    book: PropTypes.object.isRequired,
    shelves: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired
}

export default Book;