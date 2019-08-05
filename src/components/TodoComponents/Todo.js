import React from 'react';

class Todo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <li>{this.props.todo.task}</li>;
  }
}

export default Todo;