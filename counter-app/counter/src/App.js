import React, { Component } from "react";
import Counter from "./components/counter";
import "./App.css";
import { Container } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

export default App;
