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
    const h1 = (
      <span style={this.styles} className={this.getBadgeClasses()}>
        {this.formatCount()}
      </span>
    );

    const incBtn = (
      <button
        onClick={() => this.props.onIncrement(this.props.counter.id)}
        style={{ fontSize: 10 }}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
    );
    const delBtn = (
      <button
        className="btn btn-danger btn-sm m-2"
        style={{ fontSize: 10 }}
        onClick={() => this.props.onDelete(this.props.counter.id)}
      >
        Delete
      </button>
    );

    const main = (
      <div>
        {h1}
        {incBtn}
        {delBtn}
      </div>
    );
    return main;
  }
}

export default Counter;
