import React, { Component } from "react";

import SearchBar from "../common/searchBar";
import SidePanel from "../common/sidePanel";
import CustomTable from "../common/customTable";
import Pagination from "../common/pagination";

import { Container, Col, Row } from "react-bootstrap";

import getMovies from "../../services/movieService";
import { getGenres } from "../../services/genreService";

import { paginate } from "../../utils/paginate";
import _ from "lodash";

/* The Movie Page Component : it is responsible for
    Handing the movie data
    > Table
    > Pagination Data
    > Side Panel
    > Search Bar
*/

class MoviePage extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre: "",
    currentPage: 1,
    searchKeyword: "",
    pageSize: 10,
    sortColumn: { path: "name", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", genre: "All Movies" }, ...getGenres()];
    const movies = getMovies();
    this.setState({ genres, movies });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("PREV STATE ", prevState);
    console.log("PREV PROPS ", prevProps);
    if (prevState.selectedGenre !== this.state.selectedGenre) {
      this.setState({
        currentPage: 1,
        sortColumn: { path: "name", order: "asc" },
      });
    }
  }

  handleMovieDelete = (movieId) => {
    console.log("Movie id to delete is ::: ", movieId);
    const movieList = this.state.movieList.filter(
      (movie) => movie._id !== movieId
    );
    this.setState({ movieList });
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

  handleMovieLiked = (movieId) => {
    console.log("Movie id to like is ::: ", movieId);
    const movieList = this.state.movieList.map((movie) => {
      if (movie._id === movieId) {
        movie.liked = !movie.liked;
      }
      return movie;
    });
    this.setState({ movieList });
  };

  handlePageChange = (pageNum) => {
    console.log("Page change requested ::::", pageNum);
    this.setState({ currentPage: pageNum });
  };

  getFilteredMovies = () => {
    const {
      movies,
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
    } = this.state;

    console.log("The total number if movies ::: ", movies.length);
    console.log("The Current page is : ", currentPage);
    const filteredMovies = this.state.selectedGenre
      ? this.state.movies.filter(
          (movie) => movie.genre === this.state.selectedGenre
        )
      : this.state.movies;
    console.log("Total number of movies are ::: ", filteredMovies.length);

    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );

    const paginatedMovies = paginate(sortedMovies, currentPage, pageSize);
    console.log("Selected Genre id  ::: ", selectedGenre);

    return { data: paginatedMovies, count: filteredMovies.length };
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
    const {
      data: filteredMovies,
      count: movieCount,
    } = this.getFilteredMovies();

    return (
      <Container>
        <Row>
          <SearchBar searchKeyword={searchKeyword} />
        </Row>
        <Row>
          <Col className="col-2">
            <SidePanel
              items={genres}
              textProperty={"genre"}
              valueProperty={"_id"}
              onItemSelect={this.handleGenreSelect}
              selectedItem={selectedGenre}
            />
          </Col>
          <Col className="col-8">
            <CustomTable
              movies={filteredMovies}
              onLike={this.handleMovieLiked}
              onDelete={this.handleMovieDelete}
              onSort={this.handleSort}
            />
            <Pagination
              currentPage={currentPage}
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

export default MoviePage;
