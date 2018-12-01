import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';


class Shelf extends Component {


  render() {
    const { shelfID, allBooks, moveBookToShelf } = this.props;
    const shelfTitles = {
      currentlyReading: 'Currently Reading',
      wantToRead: 'Want To Read',
      read: 'Read'
    }
    console.log(typeof moveBookToShelf);
  
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitles[shelfID]}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {allBooks.map((book) => (
              book.shelf === shelfID &&
                (
                  <Book key={book.id} book={book} moveBookToShelf={moveBookToShelf} />
                )            
            ))}                
          </ol>
        </div>
      </div>

    )
  }
}

Shelf.propTypes = {
  shelfID: PropTypes.string,
  allBooks: PropTypes.array,
  moveBookToShelf: PropTypes.func,
};

export default Shelf;