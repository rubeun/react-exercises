import React, { Component } from 'react';

class AddMessage extends Component {
  state = {
    message: ''
  }

  updateNewMessage = newMessage => {

    this.setState(oldMessage => ({
      message: newMessage
    }));
    console.log(this.state);
  };

  submitNewMessage = event => {
    event.preventDefault();

    this.props.addMessage(this.state.message);
    this.setState({
      message: ''
    });
  }

  render() {
    const {username, isDisabled} = this.props;
    const {message} = this.state;
    return (
      <div>
      <form className="input-group" onSubmit={this.submitNewMessage}>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Enter your message..." 
          value={message}
          onChange={(event) => this.updateNewMessage(event.target.value)}
        />
        <div className="input-group-append">
          <button className="btn submit-button" disabled={isDisabled()}>
            SEND
          </button>
        </div>
      </form>
    </div>
    );
  }
}
export default AddMessage;