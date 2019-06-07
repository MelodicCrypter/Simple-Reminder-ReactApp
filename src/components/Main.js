import React, { Component } from 'react';
import Todo from './Todo';

import todos from '../todos-data';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            todos: todos,
        }
    }

    render() {
        return (
          <main>

          </main>
        )
    }
}

export default Main;
