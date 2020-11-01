import React, { Component } from "react";

import SearchBar from "../common/searchBar";
import SidePanel from "../common/sidePanel";
import CustomTable from "../common/customTable";
import Pagination from "../common/pagination";

import { Container, Col, Row } from "react-bootstrap";

import { paginate } from "../../utils/paginate";
import _ from "lodash";

/* The Show Page Component : it is responsible for
    Handing the shows data
    > Table
    > Pagination Data
    > Side Panel
    > Search Bar
*/

class MusicPage extends Component {
  state = {
    shows: [],
    genres: [],
    selectedGenre: "",
    currentPage: 1,
    searchKeyword: "",
    pageSize: 10,
    sortColumn: { path: "name", order: "asc" },
  };

  render() {
    return <h3> TO DO Music</h3>;
  }
}

export default MusicPage;
