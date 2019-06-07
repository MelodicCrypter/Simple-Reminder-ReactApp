import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <nav className="App-header">
          <h1>{this.props.title}</h1>
      </nav>
    )
  }
}

export default Nav;
