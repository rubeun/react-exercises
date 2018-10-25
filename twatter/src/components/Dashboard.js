import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
      <div>
        Dashboard
      </div>
    )
  }
}

// Dashboard only cares about tweets portion of store, sorted by timestamp
function mapStateToProps({tweets}) {
  return {
    tweetsId: Object.keys(tweets)
      .sort( (a,b) => tweets[b].timestamp - tweets[a].timestamp )
  }
}

// connect Dashboard to store via mapStateToProps which provides only tweets
export default connect(mapStateToProps)(Dashboard);