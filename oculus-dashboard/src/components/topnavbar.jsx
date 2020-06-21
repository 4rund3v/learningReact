import React, { Component } from "react";

class TopNavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3">
          Gravity DashBoard
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none"
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          className="form-control form-control-dark w-100"
          placeholder="Search"
          aria-label="Search"
          type="text"
        ></input>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="#">
              Sign Out
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default TopNavBar;
