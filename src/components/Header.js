import React, { Component } from 'react';
import Nav from './Nav';

class Header extends Component {
      render() {
        return (
          <header>
              <Nav title="Simple Reminder" />
          </header>
        )
      }
}

export default Header;
