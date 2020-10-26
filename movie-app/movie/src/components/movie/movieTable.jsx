import React, { Component } from "react";
import { Table } from "react-bootstrap";
import getMovies from "../../services/movieService";

class MovieTable extends Component {
  state = {
    movieList: getMovies(),
  };

  handleMovieDelete = (movieId) => {
    console.log("Movie id to delete is ::: ", movieId);
    const movieList = this.state.movieList.filter(
      (movie) => movie._id !== movieId
    );
    this.setState({ movieList });
  };

  getMovieTable = () => {
    const { movieList } = this.state;
    console.log(
      "[getMovieTable] The total number if movies ::: ",
      movieList.length
    );

    const tableHeader = (
      <thead>
        <tr>
          <th>#</th>
          <th>Movie Title</th>
          <th>Genre</th>
          <th>Year</th>
          <th>Stock</th>
        </tr>
      </thead>
    );

    const tableBody = (
      <tbody>
        {movieList.map((movie, index) => {
          const elem = (
            <tr key={movie._id}>
              <td>{index + 1}</td>
              <td>{movie.name}</td>
              <td>{movie.genre}</td>
              <td>{movie.year}</td>
              <td>{movie.stock}</td>
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
    return <React.Fragment>{movieTable}</React.Fragment>;
  }
}

export default MovieTable;
