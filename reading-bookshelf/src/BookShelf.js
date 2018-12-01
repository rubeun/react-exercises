import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Shelf from './Shelf';


class BookShelf extends Component {

  render() {
    const { allBooks, moveBookToShelf } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>


        {allBooks.length > 0
          ? (
            <div className="list-books-content">
              <div>
                <Shelf shelfID="currentlyReading" allBooks={allBooks} moveBookToShelf={moveBookToShelf} />
                <Shelf shelfID="wantToRead" allBooks={allBooks} moveBookToShelf={moveBookToShelf} />
                <Shelf shelfID="read" allBooks={allBooks} moveBookToShelf={moveBookToShelf} />
              </div>
            </div>
          )
          : (
            <div className="list-books-content">
              <div className="loading">
                <img src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif" alt="Loading" />
              </div>
            </div>
          )
        }

        <Link className="open-search" to="/search">
          <button>Add a book</button>
        </Link>
      </div>      
    )
  }
}

BookShelf.propTypes = {
  allBooks: PropTypes.array,
  moveBookToShelf: PropTypes.func,
};

export default BookShelf;