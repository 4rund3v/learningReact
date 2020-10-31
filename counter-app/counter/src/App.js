import React, { Component } from "react";
import Counters from "./components/counters";
import "./App.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";

/*
Component Life cycle Hooks
    - Mount -> {constructor, render, componentDidMount}
    - Update -> {render, componentDidUpdate}
    - Unmount -> {componentWillUnmount}

*/

class App extends Component {
  state = {
    products: [
      { name: "PS4", value: 0, id: 1, prodImage: "https://picsum.photos/100" },
      {
        name: "XboxS",
        value: 0,
        id: 2,
        prodImage: "https://picsum.photos/100",
      },
      {
        name: "Switch",
        value: 0,
        id: 3,
        prodImage: "https://picsum.photos/100",
      },
      {
        name: "Computer",
        value: 0,
        id: 4,
        prodImage: "https://picsum.photos/100",
      },
      {
        name: "Mobile",
        value: 0,
        id: 5,
        prodImage: "https://picsum.photos/100",
      },
      {
        name: "Joystick",
        value: 0,
        id: 6,
        prodImage: "https://picsum.photos/100",
      },
    ],
  };

  handleIncrement = (prodId) => {
    console.log("[App] handleIncrement :: ", prodId);
    const products = [...this.state.products];
    products.map((prod) => {
      if (prod.id === prodId) {
        prod.value = prod.value + 1;
      }
      return prod;
    });
    this.setState({ products });
  };

  handleDelete = (prodId) => {
    console.log("Delete Event Handler called.", prodId);
    const newProducts = this.state.products.filter(
      (prod) => prod.id !== prodId
    );
    this.setState({ products: newProducts });
  };
  handleReset = () => {
    console.log("[App] HandleReset Called");
    const newProducts = this.state.products.map((prod) => {
      prod.value = 0;
      return prod;
    });
    this.setState({ products: newProducts });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          cartItems={this.state.products.filter((c) => c.value > 0).length}
        />
        <Counters
          products={this.state.products}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
        />
      </React.Fragment>
    );
  }
}

export default App;
