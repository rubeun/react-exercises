import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading';

class App extends Component {

  // when App is mounted, get data from store
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true
          ? null
          : <Dashboard />
        }
      </div>
    )
  }
}

// App should only show Dashboard when handleInitialData is complete.
// So set loading to check if authedUser is set. When set, all data is available 
function mapStateToProps({authedUser}) {
  return {
    loading: authedUser === null
  }
}

// connect upgrades App component to an App container that can get state from store & dispatch action
export default connect(mapStateToProps)(App);