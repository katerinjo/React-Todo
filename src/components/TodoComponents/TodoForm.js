import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  inputHandler = ({ target }) => {
    this.setState({text: target.value})
  }

  render() {
    return (
      <form>
        <input
          type='text'
          value={this.state.text}
          onChange={this.inputHandler}
        />
      </form>
    );
  }
}

export default Form;