import React, { Component } from 'react';

class Book extends Component {
    state = {
        shelf: "",
    }



    handleChangeShelf = (e) => {
        console.log();
        e.preventDefault();
        if (this.props.onChangeShelf) {
            this.props.onChangeShelf(this.props.details, this.props.shelf);
        }
    }



    render() {
        const { bookDetails, onChangeShelf } = this.props;
        var imgURL = `url('${bookDetails.imageLinks.smallThumbnail}')`;
        console.log(imgURL);

        const divStyle = {
            width: 128,
            height: 188,
            backgroundImage: imgURL
        }

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={divStyle}></div>
                        <div className="book-shelf-changer">
                            <select value={this.state.shelf} onChange={this.handleChangeShelf}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{bookDetails.title}</div>
                    <div className="book-authors">{bookDetails.authors.join(", ")}</div>
                </div>
            </li>
        )
    }
}

export default Book;