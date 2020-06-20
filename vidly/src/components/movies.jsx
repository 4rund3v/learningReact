import React, { Component } from "react";
import { getMovies, deleteMovieById, likeMovieById } from "../services/movies";
import { getGenres } from "../services/genres";
import Pagination from "./common/pagination";
import ListGroup from "./common/listgroup";

import { paginate } from "../utils/paginate";
import MovieTable from "./movieTable";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    entriesPerPage: 8,
    currentPage: 1,
    selectedGenre: null,
    sortBy: { field: "title", order: "asc" },
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  handleDeleteMovie = (movieId) => {
    console.log("Movie to delete is :  ", movieId);
    deleteMovieById(movieId);
    this.setState({ movies: getMovies() });
  };

  handleGenreSelected = (genereId) => {
    console.log("Genre selected is : ", genereId);
    this.setState({ selectedGenre: genereId, currentPage: 1 });
  };

  handlePageChange = (pageNum) => {
    console.log("PageNum requested is : ", pageNum);
    this.setState({ currentPage: pageNum });
  };

  handleLike = (movieId) => {
    console.log("Movie to like is :  ", movieId);
    likeMovieById(movieId);
    this.setState({ movies: getMovies() });
  };
  handleSort = (colName, order) => {
    console.log("Sort by :", colName);
    let sortBy = { field: colName, order: order };
    this.setState({ sortBy: sortBy });
  };
  main() {
    const filteredMovies = this.state.selectedGenre
      ? this.state.movies.filter((m) => m.genre === this.state.selectedGenre)
      : this.state.movies;

    const movies = paginate(
      filteredMovies,
      this.state.currentPage,
      this.state.entriesPerPage
    );

    console.log("Movie list being recieved is ", movies);
    const moviePage = (
      <div className="row">
        <div className="col-3">
          <ListGroup
            genres={this.state.genres}
            selectedGenre={this.state.selectedGenre}
            onGenreSelect={this.handleGenreSelected}
          />
        </div>
        <div className="col">
          <MovieTable
            movies={movies}
            onMovieLike={this.handleLike}
            onDeleteMovie={this.handleDeleteMovie}
            onMovieSort={this.handleSort}
          />
          <Pagination
            itemsCount={filteredMovies.length}
            currentPage={this.state.currentPage}
            entriesPerPage={this.state.entriesPerPage}
            onPageChange={this.handlePageChange}
          />
          <p>
            {" "}
            Showing{" "}
            {Math.max(
              (this.state.currentPage - 1) * this.state.entriesPerPage,
              1
            )}
            {"-"}
            {filteredMovies.length +
              (this.state.currentPage - 1) * this.state.entriesPerPage}{" "}
            of {filteredMovies.length} movies.
          </p>
        </div>
      </div>
    );

    if (this.state.movies.length === 0) {
      const emptyMovies = <p>There are no movies in the database. !!</p>;
      const mainDiv = <React.Fragment>{emptyMovies}</React.Fragment>;
      return mainDiv;
    } else {
      const mainDiv = <div>{moviePage} </div>;
      return mainDiv;
    }
  }

  render() {
    return this.main();
  }
}
export default Movies;
