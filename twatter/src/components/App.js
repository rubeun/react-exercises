import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

class App extends Component {

  // when App is mounted, get data from store
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        Twatter Starter Code
      </div>
    )
  }
}

// connect upgrades App component to an App container that can get state from store & dispatch action
export default connect()(App);