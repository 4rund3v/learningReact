import React, { Component } from "react";

class NavBar extends Component {
  render() {
    console.log("NavBar - rendered ");
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          Counter{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </span>
      </nav>
    );
  }
}
export default NavBar;
