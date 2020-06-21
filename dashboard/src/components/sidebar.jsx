import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class SideBar extends Component {
  state = {};

  listSideBarElements() {
    const { elements } = this.props;
    console.log("[listSideBarElements] Elements recieved are ", elements);
    const rows = elements.map((elem) => {
      let row = (
        <NavLink className="nav-item nav-link" to={"/" + elem.path}>
          {elem.name}
        </NavLink>
      );
      return row;
    });
    const container = (
      <ul className="nav flex-column justify-content-center">{rows}</ul>
    );
    return container;
  }

  render() {
    return (
      <nav className="col-md-2 d-md-block bg-light sidebar">
        <div className="sidebar-sticky">{this.listSideBarElements()}</div>
      </nav>
    );
  }
}

export default SideBar;
