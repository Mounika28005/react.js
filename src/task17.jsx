import React, { Component } from 'react';

class Task17 extends Component {
  // Initialize state with the default message "Hello"
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello', // Default message is "Hello"
    };
  }

  // Method to toggle between "Hello" and "Goodbye"
  toggleMessage = () => {
    this.setState((prevState) => ({
      message: prevState.message === 'Hello' ? 'Goodbye' : 'Hello',
    }));
  };

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={this.toggleMessage}>Toggle Message</button>
      </div>
    );
  }
}

export default Task17;