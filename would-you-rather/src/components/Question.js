import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class Question extends Component {
  
  render() {
    const { question } = this.props;
    
    if (question === null) {
      return <p>This Question doesn't exist</p>
    }
    const {
      optionOne, optionTwo, id
    } = question;

    return (
      <Link to={`/questions/${id}`} className='question'>
        <div className='question-info'>
          <div>
            <p>{optionOne.text}</p>
            <p>or</p>
            <p>{optionTwo.text}</p>
          </div>
        </div>
      </Link>
    )
  }
}

// Question needs authedUser, users, questions from store. Question is also passed in id as prop (of Question to be displayed)
function mapStateToProps({authedUser, questions}, { id }) {
  const question = questions[id];

  return {
    authedUser,
    question: question 
      ? question
      : null
  }
}

// withRouter passes connected component all router props
export default withRouter(connect(mapStateToProps)(Question));