import React, { Component } from "react";
import styled from "styled-components";
import Image from "../../assets/images/machine_logo.png";

const Container = styled.div``;
const ApplicationImg = styled.img`
  height: 100px;
  width: 100px;
`;
const ApplicationName = styled.h1`
  font-size: 1.3rem;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
`;

class Profile extends Component {
  state = {};
  render() {
    return (
      <Container>
        <ApplicationImg src={Image} />
        <ApplicationName>Quickedge</ApplicationName>
      </Container>
    );
  }
}

export default Profile;
