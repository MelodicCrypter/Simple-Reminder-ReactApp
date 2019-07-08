import React, { Component } from 'react'

export default class Adder extends Component {
  render() {
    return (
        <form
            onSubmit={(e) => {
                this.props.handleSubmit(e)
            }}
        >
            <input
                className="adder-input-text"
                type="text"
                name="todoItem"
                placeholder="Add tasks here..."
                autoComplete="off"
                ref={this.props.thisRef}
            />
            <input
                className="adder-input-submit"
                type="submit"
                value="ADD"/>
        </form>
    )
  }
}
