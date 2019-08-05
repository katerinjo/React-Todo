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
    console.log(this.props.subFun)
    this.props.subFun({
      task: this.state.text,
      id: 42,
      completed: false
    });
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