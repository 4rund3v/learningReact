import React, { Component } from "react";
// import { ReactComponent as movieIcon } from "../img/movie.svg";
import MovieLogo from "../img/movie.png";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    console.log("logo ", MovieLogo);
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={{ MovieLogo }} alt="logo" height="80" width="120" />
        <Link className="navbar-header" to="/">
          Media Lounge
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/movies">
              Movies
            </NavLink>
            <NavLink className="nav-item nav-link" to="/music">
              Music
            </NavLink>
            <NavLink className="nav-item nav-link" to="/shows">
              Shows
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavBar;
