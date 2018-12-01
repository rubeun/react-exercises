import React, { Component } from 'react';
import BookShelf from './BooksShelf'
import PropTypes from 'prop-types';
class Main extends Component {
    render() {
        const shelves = {
            currentlyReading: ['Currently Reading', 'currentlyReading'],
            wantToRead: ['Want to Read', 'wantToRead'],
            read: ['Read', 'read']
          }
          console.log(Object.keys(shelves))
        const {books, onchangeBookPosition} = this.props
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    { Object.keys(shelves).map((shelf) =>
                    <BookShelf key={shelf}
                        shelf={shelves[shelf][1]}
                        title={shelves[shelf][0]}
                        books={ books.filter(book=>book.shelf===shelves[shelf][1]) }
                        changeBookPosition={onchangeBookPosition}/>)}
                    )}
  </div>                
            </div>
        );
    }
}
Main.propTypes = {
    books: PropTypes.array.isRequired,
    onchangeBookPosition: PropTypes.func.isRequired
}
export default Main;