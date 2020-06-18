import React, { Component } from "react";
import { getMovies, deleteMovieById } from "../services/movies";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDeleteMovie = (movieId) => {
    console.log("Movie to delete is :  ", movieId);
    deleteMovieById(movieId);
    this.setState({ movies: getMovies() });
  };

  getTableBody() {
    return (
      <tbody>
        {this.state.movies.map((movie) => {
          let row = (
            <tr key={movie._id}>
              <td>
                <img src="https://picsum.photos/50" alt={movie.title} />
              </td>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>{movie.publishDate}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => this.handleDeleteMovie(movie._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
          return row;
        })}
      </tbody>
    );
  }
  getTableHeaders() {
    return (
      <thead>
        <tr>
          <th>MovieThumb</th>
          <th>Title</th>
          <th>Genre</th>
          <th>ItemsInStock</th>
          <th>RentStock</th>
          <th>PublishDate</th>
          <th>Action</th>
        </tr>
      </thead>
    );
  }

  main() {
    const movieTable = (
      <React.Fragment>
        <p> Showing {this.state.movies.length} movies.</p>
        <table className="table">
          {this.getTableHeaders()}
          {this.getTableBody()}
        </table>
      </React.Fragment>
    );

    if (this.state.movies.length === 0) {
      const emptyMovies = <p>There are no movies in the database. !!</p>;
      const mainDiv = <React.Fragment>{emptyMovies}</React.Fragment>;
      return mainDiv;
    } else {
      const mainDiv = <div>{movieTable}</div>;
      return mainDiv;
    }
  }

  render() {
    return this.main();
  }
}
export default Movies;
