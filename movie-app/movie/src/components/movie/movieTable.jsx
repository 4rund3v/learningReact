import React, { Component } from "react";
import { Container, Row, Table } from "react-bootstrap";
import Pagination from "../common/pagination";
import getMovies from "../../services/movieService";
import { getGenreNameById } from "../../services/genreService";
import Like from "../common/like";

import { paginate } from "../../utils/paginate";

class MovieTable extends Component {
  state = {
    movieList: [],
    pageSize: 10,
    currentPage: 1,
  };
  componentDidMount() {
    this.setState({ movies: this.props.movies });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Update compoenet called");
    if (prevProps.movies !== this.props.movies) {
      this.setState({ movieList: this.props.movies });
    }
  }
  handleMovieDelete = (movieId) => {
    console.log("Movie id to delete is ::: ", movieId);
    const movieList = this.state.movieList.filter(
      (movie) => movie._id !== movieId
    );
    this.setState({ movieList });
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

  getMovieTable = () => {
    const { movieList, pageSize, currentPage } = this.state;

    console.log(
      "[getMovieTable] The total number if movies ::: ",
      movieList.length
    );
    console.log("[getMovieTable] The Current page is : ", currentPage);
    const movies = paginate(movieList, currentPage, pageSize);
    const tableHeader = (
      <thead>
        <tr>
          <th>#</th>
          <th>Movie Title</th>
          <th>Language</th>
          <th>Genre</th>
          <th>Year</th>
          <th>Liked</th>
          <th></th>
        </tr>
      </thead>
    );

    const tableBody = (
      <tbody>
        {movies.map((movie, index) => {
          const elem = (
            <tr key={movie._id}>
              <td>{index + 1}</td>
              <td>{movie.name}</td>
              <td>{movie.language}</td>
              <td>{getGenreNameById(movie.genre)}</td>
              <td>{movie.year}</td>
              <td>
                <Like
                  liked={movie.liked}
                  onClick={() => this.handleMovieLiked(movie._id)}
                />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => this.handleMovieDelete(movie._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
          return elem;
        })}
      </tbody>
    );

    const movieTable = (
      <Table responsive="md" striped bordered hover variant="light">
        {tableHeader}
        {tableBody}
      </Table>
    );
    return movieTable;
  };

  render() {
    const movieTable = this.getMovieTable();
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

export default MovieTable;
