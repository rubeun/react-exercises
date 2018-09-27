import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';


class App extends Component {

  state = {
    users: [{username: "Rubeun"}, {username: "Vero"}],
    messages: [
      { username: 'Rubeun', text: 'Hi, Vero!' },
      { username: 'Rubeun', text: 'How are you?' },
      { username: 'Vero', text: 'Hi, Rubeun! Good, you?' }
    ]
  }

  // do not allow submit if there is no user input
  isDisabled = () => {
    return false;
  };

  addMessage = (username, message) => {
    let newUserMessage = { username: username, text: message };
    this.setState(oldMessages => ({
      messages: oldMessages.messages.concat([newUserMessage])
    }));
    console.log(this.state);
  }

  render() {
    //console.log("Messages ", this.state.messages);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Chat Windows Exercise</h1>
        </header>
        <div className="container">
          <ChatWindow 
            username={this.state.users[0].username} 
            messages={this.state.messages} 
            isDisabled={this.isDisabled}
            addMessage={this.addMessage} 
          />
          <ChatWindow 
            username={this.state.users[1].username} 
            messages={this.state.messages} 
            isDisabled={this.isDisabled}
            addMessage={this.addMessage} 
          />
        </div>
      </div>
    );
  }
}

export default App;
