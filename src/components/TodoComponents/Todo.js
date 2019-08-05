import React from 'react';

class Todo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <p>{this.props.task.task}</p>
      </>
    );
  }
}

export default Todo;