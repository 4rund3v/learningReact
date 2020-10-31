import React, { Component } from "react";
import { Container, Row, Table } from "react-bootstrap";
import Pagination from "../common/pagination";

import { paginate } from "../../utils/paginate";
import MovieTable from "./movieTable";

import _ from "lodash";

class MovieListing extends Component {
  state = {
    movieList: this.props.movies,
    pageSize: 10,
    currentPage: 1,
    sortColumn: { path: "name", order: "asc" },
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.movies !== this.props.movies) {
      this.setState({
        movieList: this.props.movies,
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

  render() {
    const { movieList, pageSize, currentPage, sortColumn } = this.state;

    console.log("The total number if movies ::: ", movieList.length);
    console.log("The Current page is : ", currentPage);
    const sortedMovies = _.orderBy(
      movieList,
      [sortColumn.path],
      [sortColumn.order]
    );
    const movies = paginate(sortedMovies, currentPage, pageSize);

    const movieTable = (
      <MovieTable
        movies={movies}
        onLike={this.handleMovieLiked}
        onDelete={this.handleMovieLiked}
        onSort={this.handleSort}
      />
    );

    const pagination = (
      <React.Fragment>
        Showing {this.state.movieList.length} movies in database.
        <Pagination
          currentPage={this.state.currentPage}
          itemsCount={this.state.movieList.length}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );

    return (
      <React.Fragment>
        <Container>
          {movieTable}
          {pagination}
        </Container>
      </React.Fragment>
    );
  }
}

export default MovieListing;
