import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tweet from './Tweet';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3 className='center'>Your Twatter Timeline</h3>
        <ul className='dashboard-list'>
          {this.props.tweetsId.map((id) => (
            <li key={id}>
              <Tweet id={id} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

// Dashboard only cares about tweetsId portion of store, sorted by timestamp
function mapStateToProps({tweets}) {
  return {
    tweetsId: Object.keys(tweets)
      .sort( (a,b) => tweets[b].timestamp - tweets[a].timestamp )
  }
}

// connect Dashboard to store via mapStateToProps which provides only tweetsId accessible by this.props
export default connect(mapStateToProps)(Dashboard);