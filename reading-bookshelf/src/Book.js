import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {

  state = {
    currentShelfSelection: "none"
  }

  // handles user choosing to move the book to another shelf
  handleMoveBookToShelf = (e) => {
    const { book, moveBookToShelf } = this.props;
    console.log("Move " + book.title + " to " + e.target.value);
    this.setState({
      currentShelfSelection: e.target.value
    });  
    moveBookToShelf(book, e.target.value); 
    this.forceUpdate(); 
  }

  // consolidate authors into a single string separated by commas
  displayAuthors = (authors) => {
    if (authors !== undefined) {
      return authors.join(', ');
    } else {
      return 'unknown author';
    }
  }

  // check if there is a valid thumbnail, if not show book cover unavailable image
  displayThumbnail = (imageLinks) => {
    if (imageLinks !== undefined) {
      if (imageLinks.thumbnail !== undefined) {
        return imageLinks.thumbnail;
      } else {
        return imageLinks.smallThumbnail;
      }
    } else {
      // cover not available
      return 'http://www.scottishbooktrust.com/files/styles/book-cover-book-page/public/cover-not-available_215.png';
    }
  }

  // needed to update current shelf of search results that don't have that info 
  componentWillReceiveProps(props) {
    console.log("Props Updated: ", props.book.shelf);
    if (props.book.shelf) {
      this.setState({
        currentShelfSelection: props.book.shelf
      });          
    }
  }

  // check current shelf when book is called and update its local state
  componentDidMount() {
    const { currentShelf } = this.props;
    console.log("Component Mounted - currentSelf:", currentShelf);
    if (currentShelf !== "undefined") {
      this.setState({
        currentShelfSelection: currentShelf
      });  
    } 
  }

  render() {
    const { book } = this.props;
    const { currentShelfSelection } = this.state;
    const { title, imageLinks, authors } = book;
    const authorsText = this.displayAuthors(authors);
    const imageThumbnail = this.displayThumbnail(imageLinks);
    const imageStyle = {
      width: 128, 
      height: 193, 
      backgroundRepeat: "round",
      backgroundImage: 'url(' + imageThumbnail + ')',
    }

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={imageStyle}></div>
            <div className="book-shelf-changer">
              <select value={currentShelfSelection}  onChange={this.handleMoveBookToShelf}>
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
  currentShelf: PropTypes.string,
};

export default Book;