import React, { Component } from 'react';

class Header extends Component {
  render() {
    const { onAddItem } = this.props;
    return (
      <header className="header">
        <h1>todos</h1>
        <input onKeyUp={onAddItem} className="new-todo" placeholder="What needs to be done?" autoFocus />
      </header>
    )
  }
}

export default Header;