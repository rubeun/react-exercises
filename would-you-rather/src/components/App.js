import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading';


class App extends Component {

  componentDidMount() {

    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            Would You Rather?
          </div>
        </Fragment>
      </Router>
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