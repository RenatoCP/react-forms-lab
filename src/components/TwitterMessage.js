import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message:""
    };
  }

  handleMessageInput = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let charsRemain = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={(event) => this.handleMessageInput(event)} value={this.state.message} />
        {charsRemain}
      </div>
    );
  }
}

export default TwitterMessage;