import React, { Component } from 'react';
import classNames from 'classnames';

class TodoItem extends Component {

  render() {
    const { onStartEdit, onFinishEdit, todoItem, onCompleteItem, onDeleteItem } = this.props;

    return (
      <li onDoubleClick={onStartEdit} className={classNames({'completed': todoItem.isComplete}, {'editing': todoItem.isEdit})}>
        <div className="view">
          <input onChange={onCompleteItem} className="toggle" type="checkbox" checked={todoItem.isComplete === true} />
          {!todoItem.isEdit && <label>{todoItem.title}</label>}
          <button onClick={onDeleteItem} className="destroy"></button>
        </div>
        <input onKeyUp={onFinishEdit} className="edit" placeholder={todoItem.title} />
      </li>
    )
  }
}

export default TodoItem;