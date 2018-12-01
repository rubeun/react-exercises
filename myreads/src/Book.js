import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
    state={
        value: this.props.currentShelf
    }
    handleChange=(e)=>{
        const {book, changeBookPosition}=this.props;
        if(typeof changeBookPosition === 'function') {
            changeBookPosition(book, e.target.value)
        }
    }
    
    render() {
        const book = this.props.book
        const authors = typeof book.authors !== 'undefined' ? book.authors.map(author=> author) : '';
        return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks? book.imageLinks.smallThumbnail:null})`}}>
                        <div className="book-shelf-changer">
                            <select value={book.shelf} onChange={this.handleChange}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{authors}</div>  
            </div>        
        </li>
    )
    }
}
Book.propTypes = {
    book: PropTypes.object.isRequired,
    changeBookPosition: PropTypes.func.isRequired,
}
export default Book;

