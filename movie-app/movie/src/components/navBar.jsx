import React, { Component } from "react";
// import { ReactComponent as movieIcon } from "../img/movie.svg";
import MovieLogo from "../img/movie.png";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand">
              <img src={MovieLogo} alt="logo" width="80" height="80" />
              <b> Local Movies </b>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavBar;
