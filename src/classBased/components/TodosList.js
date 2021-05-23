import React from "react";

import TodoItem from "./TodoItem";

class TodosList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo) => (
          // <li key={todo.id}>{todo.title}</li>
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            deleteTodoProps={this.props.deleteTodoProps}
            setUpdate={this.props.setUpdate}
          />
        ))}
      </div>
    );
  }
}

export default TodosList;
