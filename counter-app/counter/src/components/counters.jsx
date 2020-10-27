import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Counter from "./counter";

class Counters extends Component {
  state = {
    products: [
      { name: "PS4", value: 0, id: 1 },
      { name: "XboxS", value: 0, id: 2 },
      { name: "Switch", value: 0, id: 3 },
      { name: "Computer", value: 0, id: 4 },
      { name: "Mobile", value: 0, id: 5 },
      { name: "Joystick", value: 0, id: 6 },
    ],
  };

  handleIncrement = (prodId) => {
    console.log("handleIncrement", prodId);
    //this.setState({ value: value + 1 });
    const newProducts = this.state.products.map((prod) => {
      if (prod.id === prodId) {
        prod.value = prod.value + 1;
        console.log(prod);
      }
      return prod;
    });
    console.log("Increment ", newProducts);
    this.setState({ products: newProducts });
  };

  handleReset = () => {
    console.log("HandleReset");
    const newProducts = this.state.products.map((prod) => {
      prod.value = 0;
      return prod;
    });
    this.setState({ products: newProducts });
  };

  handleDelete = (prodId) => {
    console.log("Delete Event Handler called.", prodId);
    const newProducts = this.state.products.filter(
      (prod) => prod.id !== prodId
    );
    this.setState({ products: newProducts });
  };

  render() {
    console.log("Rendering Data");
    return (
      <div>
        <Button variant="primary" onClick={() => this.handleReset()}>
          Reset
        </Button>{" "}
        <ul>
          {this.state.products.map((prod) => (
            <li key={prod.id}>
              {" "}
              <Counter
                key={prod.id}
                prod={prod}
                onIncrement={this.handleIncrement}
                onDelete={this.handleDelete}
              />{" "}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Counters;
