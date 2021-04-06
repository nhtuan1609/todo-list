import React, { Component } from "react";

import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isConpleteAll: false,
      todoItems: [
        { title: "Đi mua cá", isComplete: true, isEdit: false },
        { title: "Đi mua gà" },
        { title: "Đi mua heo" },
      ],
      filter: "All",
    };

    this.onCompleteItem = this.onCompleteItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
    this.onCompleteAll = this.onCompleteAll.bind(this);
    this.onSelectFilter = this.onSelectFilter.bind(this);
    this.onClearCompleted = this.onClearCompleted.bind(this);
    this.onStartEdit = this.onStartEdit.bind(this);
    this.onFinishEdit = this.onFinishEdit.bind(this);
  }

  onCompleteItem(item) {
    return () => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);

      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete,
          },
          ...todoItems.slice(index + 1),
        ],
      });
    };
  }

  onDeleteItem(item) {
    return () => {
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);

      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          ...todoItems.slice(index + 1),
        ],
      });
    };
  }

  onAddItem(event) {
    let text = event.target.value;
    if (!text) {
      return;
    }

    text = text.trim();
    if (!text) {
      return;
    }

    if (event.keyCode === 13) {
      const { todoItems } = this.state;
      const newItem = {
        title: text,
        isComplete: false,
      };

      this.setState({
        todoItems: [newItem, ...todoItems],
      });

      event.target.value = "";
    }
  }

  onCompleteAll() {
    const { todoItems, isConpleteAll } = this.state;

    this.setState({
      isConpleteAll: !isConpleteAll,
      todoItems: todoItems.map((todoItem) => {
        return {
          title: todoItem.title,
          isComplete: !isConpleteAll,
        };
      }),
    });
  }

  onSelectFilter(event) {
    const filter = event.target.outerText;
    this.setState({
      ...this.state,
      filter: filter,
    });
  }

  onClearCompleted() {
    const { todoItems } = this.state;
    this.setState({
      ...this.state,
      todoItems: todoItems.filter((todoItem) => todoItem.isComplete !== true),
    });
  }

  onStartEdit(item) {
    return () => {
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);

      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          { title: item.title, isComplete: item.isComplete, isEdit: true },
          ...todoItems.slice(index + 1),
        ],
      });
    };
  }

  onFinishEdit(item) {
    return (event) => {
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);

      if (event.keyCode === 13) {
        let text = event.target.value;
        if (!text) {
          return;
        }

        text = text.trim();
        if (!text) {
          return;
        }

        this.setState({
          todoItems: [
            ...todoItems.slice(0, index),
            { title: text, isComplete: item.isComplete, isEdit: false },
            ...todoItems.slice(index + 1),
          ],
        });
      } else if (event.keyCode === 27) {
        this.setState({
          todoItems: [
            ...todoItems.slice(0, index),
            { title: item.title, isComplete: item.isComplete, isEdit: false },
            ...todoItems.slice(index + 1),
          ],
        });
      }
    };
  }

  render() {
    const { todoItems, filter, isConpleteAll } = this.state;
    return (
      <section className="todoapp">
        <Header onAddItem={this.onAddItem} />
        <TodoList
          onStartEdit={this.onStartEdit}
          onFinishEdit={this.onFinishEdit}
          isConpleteAll={isConpleteAll}
          todoItems={todoItems}
          filter={filter}
          onCompleteItem={this.onCompleteItem}
          onDeleteItem={this.onDeleteItem}
          onCompleteAll={this.onCompleteAll}
        />
        <Footer
          onClearCompleted={this.onClearCompleted}
          todoItems={todoItems}
          filter={filter}
          onSelectFilter={this.onSelectFilter}
        />
      </section>
    );
  }
}

export default App;
