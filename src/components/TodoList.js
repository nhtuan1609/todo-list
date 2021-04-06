import React, { Component } from "react";

import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const {
      onStartEdit,
      onFinishEdit,
      isConpleteAll,
      todoItems,
      filter,
      onCompleteItem,
      onDeleteItem,
      onCompleteAll
    } = this.props;
    return (
      <section className="main">
        <input
          onChange={onCompleteAll}
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          checked={isConpleteAll === true}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todoItems.map((todoItem, index) => {
            let html = "";
            if (filter === "Active" && todoItem.isComplete !== true) {
              html = (
                <TodoItem
                  onStartEdit={onStartEdit(todoItem)}
                  onFinishEdit={onFinishEdit(todoItem)}
                  key={index}
                  todoItem={todoItem}
                  onCompleteItem={onCompleteItem(todoItem)}
                  onDeleteItem={onDeleteItem(todoItem)}
                />
              );
            } else if (filter === "Completed" && todoItem.isComplete === true) {
              html = (
                <TodoItem
                  onStartEdit={onStartEdit(todoItem)}
                  onFinishEdit={onFinishEdit(todoItem)}
                  key={index}
                  todoItem={todoItem}
                  onCompleteItem={onCompleteItem(todoItem)}
                  onDeleteItem={onDeleteItem(todoItem)}
                />
              );
            } else if (filter === "All") {
              html = (
                <TodoItem
                  onStartEdit={onStartEdit(todoItem)}
                  onFinishEdit={onFinishEdit(todoItem)}
                  key={index}
                  todoItem={todoItem}
                  onCompleteItem={onCompleteItem(todoItem)}
                  onDeleteItem={onDeleteItem(todoItem)}
                />
              );
            }

            return html;
          })}
        </ul>
      </section>
    );
  }
}

export default TodoList;
