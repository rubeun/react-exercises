import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FiCheckCircle } from 'react-icons/fi';
import { calculatePercentage } from '../utils/helpers';

class QuestionPage extends Component {

  // checks if user has already voted on this question
  hasVoted = () => {
    const { question, authedUser } = this.props;
    if (question.optionOne.votes.includes(authedUser)) {
      return 'optionOne';
    } else if (question.optionTwo.votes.includes(authedUser)) {
      return 'optionTwo';
    } else {
      return false;
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // todo: handle answer
  }

  render() {
    const { id, question } = this.props;

    if (this.hasVoted() !== false) {
      // Already answered. Show selection you made
      return (
        <div className='center'>
          <h3 className='center'>Would You Rather</h3>
          
          <p>{question.optionOne.text} {this.hasVoted() === 'optionOne' ? <FiCheckCircle  color='green' /> : '' }</p>
          <p>or</p>
          <p>{question.optionTwo.text} {this.hasVoted() === 'optionTwo' ? <FiCheckCircle  color='green' /> : '' }</p>
          <br />
          <em>*You have answered this question*</em>

        </div>
      )
    } else {
      // Not answered. Show form to select answer.
      return (
        <div className='center'>
          <h3 className='center'>Would You Rather</h3>

          <form className='answer-question'>
            <p>{question.optionOne.text} <input type='radio' name='question' value='optionOne' required /></p>
            <p>or</p>
            <p>{question.optionTwo.text} <input type='radio' name='question' value='optionTwo' required /></p>
            <button
              className='btn'
              type='submit'
            >
              Answer
            </button>
          </form>
        </div>
      )
    }
  }
}

// QuestionPage needs authedUser, questions, users. Also accepts props with info on Question being replied to
function mapStateToProps({ authedUser, questions, users }, props) {
  const { id } = props.match.params;
  const question = questions[id];
  console.log("Question:", question);

  return {
    id,
    authedUser,
    question,
    users
  }

}

export default connect(mapStateToProps)(QuestionPage);