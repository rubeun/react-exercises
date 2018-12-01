import React, { Component } from 'react';
import Book from './Book'
import PropTypes from 'prop-types';
import './App.css';


class ShowResults extends Component {
  
    render() {
    
        const {results, changeBookPosition} = this.props;
        let li;
        if(this.props.error){
            li =<li><h4 className='error'><span>{this.props.query}</span> has not found. Try one of these words:</h4>'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'</li>
        }
        else {
            li= results.map((book, index) => <Book book={book} key={index} changeBookPosition={changeBookPosition}/>)
        }

        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {li}
                </ol>
            </div>
            )
        }
}

ShowResults.propTypes = {
    results: PropTypes.array.isRequired,
    onchangeBookPosition: PropTypes.func.isRequired,  
}

export default ShowResults;