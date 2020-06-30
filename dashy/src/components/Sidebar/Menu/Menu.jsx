import React, { Component } from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";

const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

class Menu extends Component {
  state = {};
  render() {
    return (
      <Container>
        <MenuItem title="Dashboard" active />
        <MenuItem title="Tasks" />
        <MenuItem title="Clients" />
        <MenuItem title="Settings" />
        <MenuItem title="Tasks" />
      </Container>
    );
  }
}

export default Menu;
