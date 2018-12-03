import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookShelf from './BookShelf';

class BooksApp extends Component {

  // local state for all books
  state = {
    allBooks: []
  }

  // get all the books from the API and store in state
  getAllBooks = () => {
    BooksAPI.getAll()
      .then((allBooks) => {
        this.setState(() => ({
          allBooks
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
        // backend update requested now update local state
        // const { allBooks } = this.state;
        // allBooks.map((book, index) => {
        //   if (bookToMove.id === book.id) {
        //     // copy allBooks, edit copy and reset state to the copy
        //     const newBooks = this.state.allBooks;
        //     newBooks[index].shelf = shelfID;
            
        //     this.setState({
        //       allBooks: newBooks
        //     });
        //   }
        //   return 0;             
        // });
        this.getAllBooks(); // refresh state
      });
  }

  // find the current shelf of any bookID. Used for crossreferencing with search results (that has no shelf info) 
  currentShelf = (bookID) => {
    const { allBooks } = this.state;

    let foundBookID = "none";

    allBooks.map((book) => {
      return book.id === bookID ? foundBookID = book.shelf : 'none';
    });
    return foundBookID;
  }

  componentDidMount() {
    this.getAllBooks();
  }

  render() {
    const { allBooks } = this.state;
    return (
      <Router>
        <div className="container">
          <Route path='/' exact render={() => (<BookShelf allBooks={allBooks} moveBookToShelf={this.moveBookToShelf} />)}  />
          <Route path='/search' exact render={() => (<SearchBooks moveBookToShelf={this.moveBookToShelf} currentShelf={this.currentShelf} />)} />        
        </div>
      </Router>
    )  
  }
}

export default BooksApp;