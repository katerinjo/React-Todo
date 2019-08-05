import React from 'react';

import './Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super();

    this.state = {...props.todo};
  }

  toggle = () => {
    console.log('old strike', this.state.strike)
    this.props.updateFun({...this.state});
    this.setState({completed: !this.state.completed})
  }

  render() {
    return (
      <li
        onClick={this.toggle}
        className={this.state.completed && 'done'}
      >
        {this.props.todo.task}
      </li>
    );
  }
}

export default Todo;