import React, { Component } from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Products{" "}
        <span className="badge badge-pill badge-secondary">
          Cart ::: {props.cartItems}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
