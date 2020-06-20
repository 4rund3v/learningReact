import React, { Component } from "react";
import Like from "./common/like";

class MovieTable extends Component {
  getTableHeaders() {
    return (
      <thead>
        <tr>
          <th>MovieThumb</th>
          <th onClick={() => this.props.onMovieSort("title", "asc")}>Title</th>
          <th onClick={() => this.props.onMovieSort("genre", "asc")}>Genre</th>
          <th onClick={() => this.props.onMovieSort("stock", "asc")}>Stock</th>
          <th onClick={() => this.props.onMovieSort("cost", "asc")}>Cost</th>
          <th />
          <th />
        </tr>
      </thead>
    );
  }

  getTableBody(movies) {
    return (
      <tbody>
        {movies.map((movie) => {
          let row = (
            <tr key={movie._id}>
              <td>
                <img src="https://picsum.photos/50" alt={movie.title} />
              </td>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like
                  liked={movie.liked}
                  onClick={() => this.props.onMovieLike(movie._id)}
                />
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => this.props.onDeleteMovie(movie._id)}
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

  render() {
    const { movies } = this.props;
    return (
      <table className="table">
        {this.getTableHeaders()}
        {this.getTableBody(movies)}
      </table>
    );
  }
}

export default MovieTable;
