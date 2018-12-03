import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class SearchBooks extends Component {

  // search results and if user typed in an invalid search word
  state = {
    searchResults: [],
    invalidSearchWord: false
  }

  // search BooksAPI for user input and updates in this state.
  bookSearch = (e) => {
    // check if search field is empty
    console.log("Target value", typeof e.target.value)
    if ((e.target.value) || (e.target.value !== '')) {
      BooksAPI.search(e.target.value)
        .then((searchResults) => {
          // search results found
          if (searchResults.length >  0) {
            const updatedSearchResults = this.addCurrentShelf(searchResults)
            // update results in state
            this.setState({
              searchResults: updatedSearchResults,
              invalidSearchWord: false
            }); 
          } else {
            // no results for word
            this.setState({
              searchResults: [],
              invalidSearchWord: true
            });      
          }
        })
    } else {
      // search field empty. resetting state.
      this.setState({
        searchResults: [],
        invalidSearchWord: false
      });
    }
  }

  // update search results to add its current shelf to the book info
  addCurrentShelf = (searchResults) => {
    const { allUsersBooks } = this.props;

    // adding corresponding shelf to each individual book in the results
    searchResults.map((book) => {

      // search through allUsersBooks to see if shelf is set
      allUsersBooks.map((userBook) => {
        if (userBook.id === book.id) {
          book.shelf = userBook.shelf;
        }
        return 0;
      })

      // if shelf is not set, set it to none
      if (book.shelf === 'undefined') {
        book.shelf = 'none';
      }

      return book;
    });
    return searchResults;
  }


  render() {
    const { searchResults, invalidSearchWord } = this.state;
    const { moveBookToShelf } = this.props;
    
    return (
      <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" onChange={this.bookSearch} autoFocus />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResults.length > 0 
            ? searchResults.map((book) => (
              <Book key={book.id} book={book} moveBookToShelf={moveBookToShelf} currentShelf={book.shelf} />
            ))
            : invalidSearchWord ? <h3>No Results Your Search. Please Try Again</h3> :<h3>Awaiting Search Title/Author</h3>
          }                        
        </ol>
      </div>
    </div>
    )
  }
}

SearchBooks.propTypes = {
  moveBookToShelf: PropTypes.func,
  allUsersBooks: PropTypes.array
};

export default SearchBooks;