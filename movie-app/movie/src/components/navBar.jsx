import React, { Component } from "react";
// import { ReactComponent as movieIcon } from "../img/movie.svg";
import MovieLogo from "../img/movie.png";
import { Link } from "react-router-dom";
class NavBar extends Component {
  state = {};
  render() {
    return (
      // <nav className="navbar navbar-default">
      //   <div className="container-fluid">
      //     <div className="navbar-header">
      //       <a className="navbar-brand">
      //
      //         <b> Local Movies </b>
      //       </a>
      //       <ul class="nav navbar-nav">
      //         <li class="active">
      //           <a href="#">
      //             Link <span class="sr-only">(current)</span>
      //           </a>
      //         </li>
      //         <li>
      //           <a href="#">Link</a>
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand">
              <img src={MovieLogo} alt="logo" width="80" height="80" />
              Media Center
            </a>
          </div>

          <div>
            <ul className="navbar-left">
              <li className="active">
                <Link to="/movies">
                  Movies <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li>
                <Link to="/shows">Shows </Link>
              </li>
              <li>
                <Link to="/music">Music </Link>
              </li>
            </ul>
          </div>
        </div>
        <p class="navbar-text navbar-right">
          Signed in as{" "}
          <a href="#" class="navbar-link">
            Arun Dev
          </a>
        </p>
      </nav>
    );
  }
}
export default NavBar;
