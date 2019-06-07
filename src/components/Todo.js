import React, { Component } from 'react';

class Todo extends Component {
  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#cdcdcd',
      textDecoration: 'line-through',
    };

    return (
      // The DIV for the todo item container
      <div
          style={{display: !this.props.item.todo && 'none'}}
          className="todo-item"
      >

          {/* the checkbox beside the todo item */}
          <input
              type="checkbox"
              checked={this.props.item.completed}
              onChange={() => this.props.handleChange(this.props.item.id)}
          />

          {/* the todo item itself */}
          <p style={this.props.item.completed ? completedStyle : null}>
              {this.props.item.todo}
          </p>

      </div>
    )
  }
}

export default Todo;
