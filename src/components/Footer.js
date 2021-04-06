import React, { Component } from 'react';
import classNames from 'classnames';

class Footer extends Component {
  render() {
    const { todoItems, filter, onSelectFilter, onClearCompleted } = this.props;
    let todoItemLeft = 0;

    todoItemLeft = todoItems.reduce((acc, todoItem) => {
      if (todoItem.isComplete !== true) {
        acc = acc + 1
      }
      return acc;
    }, 0)

    return (
      <footer className="footer">
        <span className="todo-count"><strong>{todoItemLeft}</strong> item left</span>
        <ul className="filters">
          <li>
            <a onClick={onSelectFilter} className={classNames({'selected': filter === 'All'})} href="#/">All</a>
          </li>
          <li>
            <a onClick={onSelectFilter} className={classNames({'selected': filter === 'Active'})} href="#/active">Active</a>
          </li>
          <li>
            <a onClick={onSelectFilter} className={classNames({'selected': filter === 'Completed'})} href="#/completed">Completed</a>
          </li>
        </ul>
        <button onClick={onClearCompleted} className="clear-completed">Clear completed</button>
      </footer>
    )
  }
}

export default Footer;