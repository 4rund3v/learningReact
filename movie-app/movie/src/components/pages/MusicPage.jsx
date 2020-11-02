import React, { Component } from "react";

import SearchBar from "../common/searchBar";
import SidePanel from "../common/sidePanel";
import CustomTable from "../common/customTable";
import Pagination from "../common/pagination";

import { Container, Col, Row } from "react-bootstrap";

import { paginate } from "../../utils/paginate";
import _ from "lodash";

import getMusic from "../../services/musicService";
import { getMusicGenres } from "../../services/musicGenreService";
/* The Show Page Component : it is responsible for
    Handing the shows data
    > Table
    > Pagination Data
    > Side Panel
    > Search Bar
*/

class MusicPage extends Component {
  state = {
    music: [],
    genres: [],
    selectedGenre: "",
    currentPage: 1,
    searchKeyword: "",
    pageSize: 15,
    sortColumn: { path: "name", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", genre: "All Genres" }, ...getMusicGenres()];
    const music = getMusic();
    this.setState({ genres, music });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedGenre !== this.state.selectedGenre) {
      this.setState({
        currentPage: 1,
        sortColumn: { path: "name", order: "asc" },
      });
    }
  }

  handleMusicDelete = (musicId) => {
    console.log("Music id to delete is ::: ", musicId);
    const music = this.state.music.filter((m) => m._id !== musicId);
    this.setState({ music });
  };

  handleSort = (sortBy) => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === sortBy) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = sortBy;
      sortColumn.order = "asc";
    }
    this.setState({ sortColumn });
  };

  handleMusicLiked = (musicId) => {
    console.log("Music id to like is ::: ", musicId);
    const music = this.state.movieList.map((m) => {
      if (m._id === musicId) {
        m.liked = !m.liked;
      }
      return m;
    });
    this.setState({ music });
  };

  handlePageChange = (pageNum) => {
    console.log("Page change requested ::::", pageNum);
    this.setState({ currentPage: pageNum });
  };

  getFilteredMusic = () => {
    const {
      music,
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
    } = this.state;

    console.log("The total number if music ::: ", music.length);
    console.log("The Current page is : ", currentPage);
    const filteredMusic = this.state.selectedGenre
      ? this.state.music.filter((m) => m.genre === this.state.selectedGenre)
      : this.state.music;
    console.log("Total number of Music are ::: ", filteredMusic.length);

    const sortedMusic = _.orderBy(
      filteredMusic,
      [sortColumn.path],
      [sortColumn.order]
    );

    const paginatedMusic = paginate(sortedMusic, currentPage, pageSize);
    console.log("Selected Genre id  ::: ", selectedGenre);

    return { data: paginatedMusic, count: sortedMusic.length };
  };

  handleGenreSelect = (genreId) => {
    console.log("Selected genre is ::: ", genreId);
    const selectedGenre = genreId;
    this.setState({ selectedGenre: selectedGenre });
  };

  render() {
    const {
      searchKeyword,
      genres,
      selectedGenre,
      pageSize,
      currentPage,
    } = this.state;

    const { data: filteredMusic, count: movieCount } = this.getFilteredMusic();

    return (
      <Container>
        <Row>
          <SearchBar searchKeyword={searchKeyword} />
        </Row>
        <Row>
          <Col className="col-2">
            <SidePanel
              items={genres}
              textProperty={"genre"} // genre selected
              valueProperty={"_id"}
              onItemSelect={this.handleGenreSelect}
              selectedItem={selectedGenre}
            />
          </Col>
          <Col className="col-8">
            <CustomTable
              className="Movietable"
              items={filteredMusic} // filtereds => genre  + pagin
              onLike={this.handleMusicLiked}
              onDelete={this.handleMusicDelete}
              onSort={this.handleSort}
            />
            <Pagination
              currentPage={currentPage} // pagenum
              itemsCount={movieCount}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MusicPage;
