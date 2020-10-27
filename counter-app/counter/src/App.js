import React, { Component } from "react";
import Counters from "./components/counters";
import "./App.css";
import { Container } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div>
        <Counters />
      </div>
    );
  }
}

export default App;
