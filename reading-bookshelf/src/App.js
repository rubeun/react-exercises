import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookShelf from './BookShelf';

class BooksApp extends Component {
  state = {
    allBooks: []
  }

  // get all the books from the API and store in state
  getAllBooks = () => {
    BooksAPI.getAll()
      .then((allBooks) => {
        this.setState({
          allBooks
        });
      });
  }

  // get a specific book with bookID
  getBook = (bookID) => {
    BooksAPI.get(bookID)
      .then((bookInfo) => {
        return bookInfo;
      });
  }

  // move book with bookID to shelf with shelfID, then refresh state
  moveBookToShelf = (bookID, shelfID) => {
    console.log("moveBookToShelf: " + bookID + " to " + shelfID);
    BooksAPI.update(bookID, shelfID)
      .then(() => {
        this.getAllBooks();
        this.forceUpdate();
      });

  }

  componentDidMount() {
    this.getAllBooks();
  }

  render() {
    const { allBooks } = this.state;
    //console.log(allBooks);
    return (
      <Router>
        <div className="container">
          <Route path='/' exact render={() => (<BookShelf allBooks={allBooks} moveBookToShelf={this.moveBookToShelf} />)}  />
          <Route path='/search' exact component={SearchBooks} />        
        </div>
      </Router>
    )  
  }
}

export default BooksApp;