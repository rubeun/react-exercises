
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ShowResults from './ShowResults';
import {PropTypes} from 'prop-types'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
  state = {
    searchResults: [],
    query: '',
    error: false
  }

  handleChange = (event) => {
    const value = event.target.value
    this.setState({query: value})

    BooksAPI.search(value).then((results) => {
     if (results && this.state.query) {
        if (results.length > 0) {
          results = this.updateBookShelf(results)
          this.setState(() => {
            return {searchResults: results, error: false}
          })
        } else {
          this.setState({
           error: true,
          });
        }
     }
     else {
       this.setState({
        error: true,
       });
     }
    })
  }

  updateBookShelf = (results) => {
    let library = this.props.books
    for (let result of results) {
      result.shelf = "none"
      for (let book of library) {
        if (book.id === result.id) {
          result.shelf = book.shelf;
        } 
      }
    }
    return results
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.handleChange}/>
          </div>
        </div>
        <ShowResults results={this.state.searchResults} changeBookPosition={this.props.onChange} error={this.state.error} query={this.state.query}/> 
      </div>
    )
  }
}
SearchBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onchangeBookPosition: PropTypes.func.isRequired,  
}
export default SearchBooks;
