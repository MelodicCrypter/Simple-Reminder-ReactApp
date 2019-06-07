import React, { Component } from 'react';
import Todo from './Todo';

import todos from '../todos-data';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            todos: todos,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState((prevState) => {
            const updatedTodo = prevState.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }

                return todo;
            });

            return {
                todos: updatedTodo,
            }
        });
    }

    render() {
        const todoComponent = this.state.todos.map((todo) => {
            return <Todo
                key={todo.id}
                item={todo}
                handleChange={this.handleChange}
            />
        });

        return (
          <main>
              {todoComponent}
          </main>
        )
    }
}

export default Main;
