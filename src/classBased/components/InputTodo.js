import React, { Component } from "react";

class InputTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    console.log("hello");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    // Note how we are preventing the default behaviour of the form submission.
    // The preventDefault() method cancels the event if it is cancelable,
    // meaning that the default action that belongs to the event will not occur.
    e.preventDefault();
    console.log(this.state.title);
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: "",
      });
    } else {
      alert("Please write item");
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          name="title"
          value={this.state.title}
          onChange={this.onChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default InputTodo;
