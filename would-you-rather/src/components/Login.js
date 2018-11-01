import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  state ={
    usernames: ''
  }


  getUsernames = (users) => {
  }


  render() {
    const { users } = this.props;
    console.log(users);
    //this.getUsernames(users);
    return (
      <div>
        <h3>Choose User</h3>
        <ul>

        </ul>
      </div>
    )
  }
}

function mapStateToProps({authedUser, users}) {
  return {
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(Login);