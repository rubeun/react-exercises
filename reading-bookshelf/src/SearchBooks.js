import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SearchBooks extends Component {

  handleSearch = (e) => {
    const { bookSearch } = this.props;
    const results = bookSearch(e.target.value);
    console.log(results);
  }


  render() {

    return (
      <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" onChange={this.handleSearch} />

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
    )
  }
}

SearchBooks.propTypes = {
  bookSearch: PropTypes.func
};

export default SearchBooks;