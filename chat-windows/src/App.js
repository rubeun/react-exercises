import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const users = [{ username: 'Rubeun' }, { username: 'Vero' }];

const messages = [
  { username: 'Rubeun', text: 'Hi, Vero!' },
  { username: 'Rubeun', text: 'How are you?' },
  { username: 'Vero', text: 'Hi, Rubeun! Good, you?' },
];

class App extends Component {

  // do not allow submit if there is no user input
  isDisabled = () => {
    return false;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Chat Windows Exercise</h1>
        </header>
        <div className="container">
          <div className="chat-window">
            <h2>PandaKitty Chat</h2>
            <div className="name sender">{users[0].username}</div>

            <ul className="message-list">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === users[0].username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <form className="input-group">
                <input type="text" className="form-control" placeholder="Enter your message..." />
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="chat-window">
            <h2>PandaKitty Chat</h2>
            <div className="name sender">{users[1].username}</div>
            <ul className="message-list">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === users[1].username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <form className="input-group">
                <input type="text" className="form-control" placeholder="Enter your message..." />
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
