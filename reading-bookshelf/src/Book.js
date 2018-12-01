import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {

  // handles user choosing to move the book to another shelf
  handleMoveBookToShelf = (e) => {
    const { book, moveBookToShelf } = this.props;
    console.log("Move " + book.id + " to " + e.target.value);
    moveBookToShelf(book, e.target.value);    
  }

  // consolidate authors into a single string separated by commas
  displayAuthors = (authors) => {
    return authors.join(',');
  }

  render() {
    const { title, imageLinks, authors, shelf } = this.props.book;
    const authorsText = this.displayAuthors(authors);
    const imageThumbnail = imageLinks.thumbnail;
    const imageStyle = {
      width: 128, 
      height: 193, 
      backgroundImage: 'url(' + imageThumbnail + ')',
    }

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={imageStyle}></div>
            <div className="book-shelf-changer">
              <select value={shelf}  onChange={this.handleMoveBookToShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authorsText}</div>
        </div>
      </li>
    )
  }
}

Book.propTypes = {
  book: PropTypes.object,
  moveBookToShelf: PropTypes.func,
};

export default Book;