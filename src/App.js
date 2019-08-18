/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
// import rootReducer from './reducers/index';
import { connect } from 'react-redux';
import Todos from './components/Todos';
import './App.css';

// function App() {
//   return (
//     <div className="todo-app container">
//       <h2 className="center blue-text">{/* <Todos todos={todos} /> */}</h2>
//     </div>
//   );
// }
class App extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    todos: [
      { id: 1, content: 'buy some milk' },
      { id: 2, content: 'play mario kart' },
    ],
  };

  deleteTodo = id => {
    // eslint-disable-next-line react/destructuring-assignment
    // eslint-disable-next-line react/no-access-state-in-setstate
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos,
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
