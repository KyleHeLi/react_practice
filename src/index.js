import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";

// Component file
import TodoContainer from "./functionBased/components/TodoContainer";

// Stylesheet
import "./functionBased/App.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);