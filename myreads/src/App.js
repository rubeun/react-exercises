import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI';
import SearchBooks from './SearchBooks';
import { Route, Link, } from 'react-router-dom';

import Main from './Main';

class App extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getAllBooksAPI()
  }

  getAllBooksAPI = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  getBookDetails = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getAllBooksAPI()
    })
  }

  render() {
    return (
      <div className="app">
      <Route exact path='/' render={() => (
        <div>
          <Main books={this.state.books} onchangeBookPosition={this.getBookDetails}/>
          <div className="open-search">
            <Link to="/search" />
          </div>
        </div>
        )}
        />
        <Route exact path='/search' render={() => (
            <SearchBooks onChange={this.getBookDetails} books={this.state.books}/>
        )} 
        />
      </div>
    )
  }
}


export default App
