import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class Dashboard extends Component {
  render() {
    const { authedUser, questions, questionsId } = this.props;
    return (
      <div>
        <h3 className='center'>Your Would You Rather Questions</h3>
        <ul className='dashboard-list'>
          <p className='center'>Unanswered Questions:</p>
          {questionsId.map((id) => (
            !questions[id].optionOne.votes.includes(authedUser) &&
            !questions[id].optionTwo.votes.includes(authedUser) &&
              (<li key={id} className='unanswered-question'>
                <Question id={id} />
              </li>)            
              )  
          )}

          <p className='center'>Answered Questions:</p>
          {questionsId.map((id) => (
            questions[id].optionOne.votes.includes(authedUser) ||
            questions[id].optionTwo.votes.includes(authedUser) &&
              (<li key={id} className='answered-question'>
                <Question id={id} />
              </li>)            
              )  
          )}

        </ul>
      </div>
    )
  }
}

// Dashboard only cares about questionsId portion of store, sorted by timestamp
function mapStateToProps({authedUser, questions}) {
  return {
    authedUser,
    questions,
    questionsId: Object.keys(questions)
      .sort( (a,b) => questions[b].timestamp - questions[a].timestamp )
  }
}

// connect Dashboard to store via mapStateToProps which provides only questionsId accessible by this.props
export default connect(mapStateToProps)(Dashboard);