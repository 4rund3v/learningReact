import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Counter extends Component {
  state = {
    id: this.props.prod.id,
    name: this.props.prod.name,
    value: this.props.prod.value,
  };

  styles = {
    fontSize: 20,
  };

  getBadgeClasses = (value) => {
    let spanClasses = "badge m-2 badge-";
    spanClasses += value <= 0 ? "secondary" : "primary";
    return spanClasses;
  };

  render() {
    const { id, name, value } = this.state;
    return (
      <React.Fragment>
        {this.props.name}
        <span style={this.styles} className={this.getBadgeClasses(value)}>
          {this.state.value}
        </span>
        <Button variant="primary" onClick={() => this.props.onIncrement(id)}>
          Increment
        </Button>{" "}
        <Button variant="danger" onClick={() => this.props.onDelete(id)}>
          Delete
        </Button>{" "}
      </React.Fragment>
    );
  }
}

export default Counter;
