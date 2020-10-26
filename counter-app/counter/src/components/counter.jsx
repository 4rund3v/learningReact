import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Counter extends Component {
  state = {
    count: 0,
    products: ["PS4", "XboxS", "Switch"],
  };

  styles = {
    fontSize: 20,
  };

  handleIncrement = (e) => {
    console.log(e);
    this.setState({ count: this.state.count + 1 });
  };

  getBadgeClasses() {
    let spanClasses = "badge m-2 badge-";
    spanClasses += this.state.count <= 0 ? "secondary" : "primary";
    return spanClasses;
  }

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.products.map((prod) => {
            const elem = (
              <li key={prod}>
                {" "}
                <span style={this.styles} className={this.getBadgeClasses()}>
                  {this.state.count}
                </span>
                <Button
                  variant="primary"
                  onClick={() => this.handleIncrement(prod)}
                >
                  Increment
                </Button>{" "}
              </li>
            );
            return elem;
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default Counter;
