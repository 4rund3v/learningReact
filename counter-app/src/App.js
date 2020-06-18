import React, { Component } from "react";
import logo from "./logo.svg";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    console.log("Delete Event called", counterId);
    let updatedCounters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters: updatedCounters });
  };

  handleIncrement = (counterId) => {
    let newCounter = this.state.counters.find(
      (counter) => counter.id === counterId
    );
    console.log("Counter to increment for is : ", newCounter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(newCounter);
    newCounter.value = newCounter.value + 1;

    console.log("Incrementing counter at index", index);
    counters[index] = newCounter;
    this.setState({ counters: counters });
    return;
  };

  handleReset = () => {
    let newCounters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: newCounters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.counters.filter((counter) => counter.value > 0).length
          }
        ></NavBar>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          ></Counters>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
