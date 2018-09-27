import React, { Component } from 'react';
import AddMessage from './AddMessage';

class ChatWindow extends Component {

  addMessage = message => {
    this.props.addMessage(this.props.username, message);
  }

  render() {
    const {username, messages, isDisabled} = this.props;
    return (
      <div className="chat-window">
        <h2>PandaKitty Chat</h2>
        <div className="name sender">{username}</div>

        <ul className="message-list">
          {messages.map((message, index) => (
            <li
              key={index}
              className={
                message.username === username ? 'message sender' : 'message recipient'
              }
            >
              <p>{`${message.username}: ${message.text}`}</p>
            </li>
          ))}
        </ul>
        <AddMessage 
          username={username} 
          isDisabled={isDisabled}
          addMessage={this.addMessage} 
        />
      </div>
    )

  }

}

export default ChatWindow;