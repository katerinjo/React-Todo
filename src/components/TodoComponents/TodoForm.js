import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  inputHandler = ({ target }) => {
    this.setState({text: target.value});
  }

  submit = ev => {
    ev.preventDefault();
    this.props.subFun({
      task: this.state.text,
      id: Date.now(),
      completed: false
    });
    this.setState({text: ''});
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <input
          type='text'
          value={this.state.text}
          onChange={this.inputHandler}
        />
        <input type='submit' />
      </form>
    );
  }
}

export default Form;