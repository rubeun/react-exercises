import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class SearchBooks extends Component {

  state = {
    searchResults: []
  }

  bookSearch = (e) => {
    if (e.target.value !== '') {
      BooksAPI.search(e.target.value)
        .then((searchResults) => {
          this.setState(() => ({
            searchResults
          }))
        })
    } else {
      console.log("Empty Search");
      this.setState(() => ({
        searchResults: []
      }))
    }
  }


  render() {
    const { searchResults } = this.state;
    const { moveBookToShelf } = this.props;

    console.log(searchResults);

    return (
      <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" onChange={this.bookSearch} />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResults.length > 0 
            ? searchResults.map((book) => (
              <Book key={book.id} book={book} moveBookToShelf={moveBookToShelf} />
            ))
            : ''
          }                        
        </ol>
      </div>
    </div>
    )
  }
}

SearchBooks.propTypes = {
  moveBookToShelf: PropTypes.func
};

export default SearchBooks;