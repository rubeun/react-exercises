import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class BooksShelf extends Component {

  render() {  
        const {books, changeBookPosition} = this.props;
        return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                {books.map((book, index) => (<Book book={book} key={index} changeBookPosition={changeBookPosition}/>))}
            </ol>
            </div>
        </div>
    )
  }
}
BooksShelf.propTypes = {
    currentlyReading: PropTypes.array.isRequired,
    wantToRead: PropTypes.array.isRequired,
    read: PropTypes.array.isRequired,
    onchangeBookPosition: PropTypes.func.isRequired
}

export default BooksShelf;