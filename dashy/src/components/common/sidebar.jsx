import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class SideBar extends Component {
  state = {};
  render() {
    return (
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>Quickedge Oculus</h3>
        </div>
        <ul className="list-unstyled components">
          <li>
            <NavLink to="/dashboard">
              <i className="fas fa-home"></i>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/clients">
              <i className="fas fa-briefcase"></i>
              Clients
            </NavLink>
          </li>
          <li>
            <NavLink to="/tasks">
              <i className="fas fa-copy"></i>
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink to="/models">
              <i className="fas fa-image"></i>
              Models
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings">
              <i className="fas fa-question"></i>
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink to="/support">
              <i className="fas fa-paper-plane"></i>
              Support
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
export default SideBar;
