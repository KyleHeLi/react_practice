import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import TodosList from "./TodosList";
import InputTodo from "./InputTodo";

import About from "../pages/About";
import NotMatch from "../pages/NotMatch";
import Navbar from "./Navbar";

const TodoContainer = (props) => {
  const [todos, setTodos] = useState(getInitialTodos()); // useState([]);

  const handleChange = (id) => {
    setTodos((preState) =>
      preState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);

    // Does this work as well?
    // setTodos(
    //   todos.filter((todo) => {
    //     return todo.id !== id;
    //   }),
    // );
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };

  // // similar to componentDidMount
  // useEffect(() => {
  //   console.log("test run");

  //   // getting stored items
  //   const temp = localStorage.getItem("todos");
  //   const loadedTodos = JSON.parse(temp);

  //   if (loadedTodos) {
  //     setTodos(loadedTodos);
  //   }
  // }, [setTodos]);

  // an alternative way to get the value and
  // assign to the state
  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem("todos");
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  // similar to componentDidUpdate
  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="inner">
              <Header />
              <InputTodo addTodoProps={addTodoItem} />
              <TodosList
                todos={todos}
                handleChangeProps={handleChange}
                deleteTodoProps={delTodo}
                setUpdate={setUpdate}
              />
            </div>
          </div>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        {/* <Route path="/about" component={About} /> */}
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </>
  );
};

export default TodoContainer;
