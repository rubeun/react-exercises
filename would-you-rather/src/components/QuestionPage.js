import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';
import { calculatePercentage } from '../utils/helpers';
import { handleSaveAnswer } from '../actions/questions';

class QuestionPage extends Component {
  // local state
  state={
    answer: ''
  }

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

  // checks which answer was selected and calls saveQuestionAnswer
  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, id } = this.props;

    const answer = document.querySelector('input[name="question"]:checked').value;

    dispatch(handleSaveAnswer(id, answer));

    this.setState(() => ({
      answer: ''
    }))
  }

  // TODO: Redirect to Home if Question does not exist

  render() {
    const { question } = this.props;

    if (this.hasVoted() !== false) {
      // Already answered. Show selection you made
      return (
        <div>
          <h3 className='center'>Would You Rather</h3>
          <div className='answered-question'>          
            <p>{question.optionOne.text} {this.hasVoted() === 'optionOne' ? <FiCheckCircle  color='green' /> : '' }</p>
            <p>or</p>
            <p>{question.optionTwo.text} {this.hasVoted() === 'optionTwo' ? <FiCheckCircle  color='green' /> : '' }</p>
            <br />
            <em>*You have already answered this question*</em>
            <p>Return <Link to='/' className='text-link'>Home</Link></p>
          </div>
        </div>
      )
    } else {
      // Not answered. Show form to select answer. Calls handleSubmit when done.
      return (
        <div>
          <h3 className='center'>Would You Rather</h3>

          <form className='unanswered-question' onSubmit={this.handleSubmit}>
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