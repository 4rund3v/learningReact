import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import MovieTable from "./movie/movieTable";
import SidePanel from "./sidePanel";
import SearchBar from "./searchBar";
class LandingPage extends Component {
  state = {};
  render() {
    return (
      <Container fluid>
        <Row>
          <SearchBar />
        </Row>
        <Row>
          <Col>
            <SidePanel />
          </Col>
          <Col>
            <MovieTable />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LandingPage;
