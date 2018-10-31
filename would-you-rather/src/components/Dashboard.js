import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3 className='center'>Your Would You Rather Questions</h3>
        <ul className='dashboard-list'>
          {this.props.questionsId.map((id) => (
            <li key={id}>
              <Question id={id} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

// Dashboard only cares about tweetsId portion of store, sorted by timestamp
function mapStateToProps({questions}) {
  return {
    questionsId: Object.keys(questions)
      .sort( (a,b) => questions[b].timestamp - questions[a].timestamp )
  }
}

// connect Dashboard to store via mapStateToProps which provides only questionsId accessible by this.props
export default connect(mapStateToProps)(Dashboard);