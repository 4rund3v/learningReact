import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  formatCount() {
    const value = this.props.counter.value;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let badgeClasses = "badge m-2 badge-";
    badgeClasses += this.props.counter.value === 0 ? "warning" : "primary";
    return badgeClasses;
  }

  render() {
    console.log("Counter - Component is rendered");
    const h1 = (
      <span style={this.styles} className={this.getBadgeClasses()}>
        {this.formatCount()}
      </span>
    );

    const incBtn = (
      <button
        onClick={() => this.props.onIncrement(this.props.counter.id)}
        className="btn btn-secondary btn-sm m-2"
      >
        +
      </button>
    );
    const decBtn = (
      <button
        onClick={() => this.props.onDecrement(this.props.counter.id)}
        className="btn btn-secondary btn-sm m-2"
        disabled={this.props.counter.value === 0 ? "disabled" : ""}
      >
        -
      </button>
    );
    const delBtn = (
      <button
        className="btn btn-danger btn-sm "
        style={{ fontSize: 10 }}
        onClick={() => this.props.onDelete(this.props.counter.id)}
      >
        x
      </button>
    );

    const main = (
      <div className="row">
        <div className="col-1">{h1}</div>
        <div className="col">
          {incBtn}
          {decBtn}
          {delBtn}
        </div>
      </div>
    );
    return main;
  }
}

export default Counter;
