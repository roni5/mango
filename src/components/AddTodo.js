/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { addTodo } from '../actions/todoActions';
//  addTodo action is prop
class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    // this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  handleAddTodo = () => {
    // dispatches actions to add todo

    this.props.addTodo(this.state.input);
    // sets state back to empty string
    this.setState({ input: '' });
  };

  updateInput(e) {
    this.setState({ value: e.target.value });
  }

  //  updateInput = (e) => this.setState({
  //   input: e.target.value// look at input key:
  // });
  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button  type="button" className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo },
)(AddTodo);