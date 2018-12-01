import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Shelf from './Shelf';


class BookShelf extends Component {

  render() {
    const { allBooks, moveBookToShelf } = this.props;
    console.log(allBooks);
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>


        {allBooks.length > 0
          ? (
            <div className="list-books-content">
              <div>
                <Shelf shelfID="currentlyReading" allBooks={allBooks} />
                <Shelf shelfID="wantToRead" allBooks={allBooks} />
                <Shelf shelfID="read" allBooks={allBooks} />
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