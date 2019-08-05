import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const testData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = {
      todos: []
    };
  }

  add = todo => {
    console.log(this.state.todos)
    this.setState({todos: [...this.state.todos, todo]})
  }

  update = todo => {
    console.log('update(todo)', todo)
    console.log('current', this.state.todos)
    this.setState({todos: this.state.todos.map(old => {
      if (old.id == todo.id) {
        return {...old, ...todo};
      } else {
        return old;
      }
    })})
  }

  toggle = todo => {
    this.update({
      ...todo,
      completed: !todo.completed
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} updateFun={this.toggle}/>
        <TodoForm subFun={this.add} />
      </div>
    );
  }
}

export default App;
