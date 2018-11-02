import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/shared';

class Users extends Component {

  handleLogout = () => {
    this.props.dispatch(logoutUser());
  }

  render() {
    const { authedUser, users } = this.props;

    if (authedUser !== null) {
      return (
        <div className='current-user'>
          <p className='current-username'>{authedUser} is logged in</p>
          <p className='log-out' onClick={this.handleLogout}>Log Out</p>
          <img className='avatar' src={users[authedUser].avatarURL} alt={authedUser} />
        </div>
      )
    } else {
      return (
        <div className='current-user'>
          <p className='user-logged-out'>Not Logged In</p>
        </div>
      )
    }
  }
}

function mapStateToProps({authedUser, users}) {
  return {
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(Users);