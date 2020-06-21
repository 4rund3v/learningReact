import React, { Component } from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
class SideBar extends Component {
  state = {
    containers: [],
  };

  componentDidMount() {
    if (!this.activeElement) {
      this.setState({ activeElement: "personalities" });
    }
  }

  listSideBarElements() {
    const { elements, activeElement, onSelectElement } = this.props;
    console.log("[listSideBarElements] Elements recieved are ", elements);
    const rows = elements.map((elem) => {
      let row = (
        <li
          key={elem._id}
          className="nav-item"
          onClick={() => onSelectElement(elem._id)}
        >
          <NavLink
            className={elem._id === activeElement ? "nav-link" : "nav-link"}
            to={"/" + elem.path}
          >
            {elem.name}
          </NavLink>
        </li>
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
