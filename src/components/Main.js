import React, {Component, Fragment} from 'react';
import Todo from './Todo';
import Adder from './Adder';

import todos from '../todos-data';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            todos: todos,
        };
        this.input = React.createRef();
    }

    handleChange = (id) => {
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
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const rcvdTodo = this.input.current.value;
        const currentTodosLength = this.state.todos.length;

        const newTodoItem = [
            ...this.state.todos,
            {
                id: currentTodosLength + 1,
                todo: rcvdTodo,
                completed: false,
            }
            ];

        this.setState({ todos: newTodoItem });
    };

    render() {
        const todoComponent = this.state.todos.map((todo) => {
            return <Todo
                key={todo.id}
                item={todo}
                handleChange={this.handleChange}
            />
        });

        return (
            <Fragment>
                <main>
                      {todoComponent.reverse()}
                </main>

                <footer>
                    <Adder
                        handleSubmit={this.handleSubmit}
                        thisRef={this.input}
                    />
                </footer>
            </Fragment>
        )
    }
}

export default Main;
