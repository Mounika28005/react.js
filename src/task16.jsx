import React from './react'
class ToggleMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello', // Default message is "Hello"
    };
  }
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

export default ToggleMessage;
