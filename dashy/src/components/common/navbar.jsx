import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>Quickedge Oculus</h3>
        </div>
        <ul className="list-unstyled components">
          <li className="active">
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
            >
              <i className="fas fa-home"></i>
              Dashboard
            </a>
            <ul className="collapse list-unstyled" id="homeSubmenu">
              <li>
                <a href="#">Model Stats</a>
              </li>
              <li>
                <a href="#">System Stats</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-briefcase"></i>
              Clients
            </a>
            <a
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
            >
              <i className="fas fa-copy"></i>
              Tasks
            </a>
            <ul className="collapse list-unstyled" id="pageSubmenu">
              <li>
                <a href="#">Recognition Tasks</a>
              </li>
              <li>
                <a href="#">Relearn Tasks</a>
              </li>
              <li>
                <a href="#">Model Tasks</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-image"></i>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-question"></i>
              Docs
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-paper-plane"></i>
              Support
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
export default NavBar;
