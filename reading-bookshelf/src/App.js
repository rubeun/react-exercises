import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookShelf from './BookShelf';

class BooksApp extends Component {

  // local state for all books
  state = {
    allUsersBooks: []
  }

  // get all the books from the API and store in state
  getAllBooks = () => {
    BooksAPI.getAll()
      .then((allUsersBooks) => {
        this.setState(() => ({
          allUsersBooks
        }));
      });
  }

  // get a specific book with bookID (not needed?)
  getBook = (bookID) => {
    BooksAPI.get(bookID)
      .then((bookInfo) => {
        return bookInfo;
      });
  }

  // move book to shelf with shelfID, then refresh state
  moveBookToShelf = (bookToMove, shelfID) => {
    BooksAPI.update(bookToMove, shelfID)
      .then(() => {
        // # NOTE: Can skip this as calling getAllBooks updates local state #
        // const { allUsersBooks } = this.state;
        // allUsersBooks.map((book, index) => {
        //   if (bookToMove.id === book.id) {
        //     // copy allUsersBooks, edit copy and reset state to the copy
        //     const newBooks = this.state.allUsersBooks;
        //     newBooks[index].shelf = shelfID;
            
        //     this.setState({
        //       allUsersBooks: newBooks
        //     });
        //   }
        //   return 0;             
        // });
        this.getAllBooks(); // refresh state
      });
  }

  componentDidMount() {
    this.getAllBooks();
  }

  render() {
    const { allUsersBooks } = this.state;
    return (
      <Router>
        <div className="container">
          <Route path='/' exact render={() => (<BookShelf allUsersBooks={allUsersBooks} moveBookToShelf={this.moveBookToShelf} />)}  />
          <Route path='/search' exact render={() => (<SearchBooks moveBookToShelf={this.moveBookToShelf} allUsersBooks={allUsersBooks} />)} />        
        </div>
      </Router>
    )  
  }
}

export default BooksApp;