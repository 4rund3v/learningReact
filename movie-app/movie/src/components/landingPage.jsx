import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import MovieListing from "./movie/movieListing";
import ListGroup from "./common/listGroup";
import SearchBar from "./searchBar";
import getMovies from "../services/movieService";
import { getGenres } from "../services/genreService";

class LandingPage extends Component {
  state = {
    movies: [],
    genres: [],
    genreSelected: "",
  };

  componentDidMount() {
    const genres = [{ _id: "", genre: "All Movies" }, ...getGenres()];
    const movies = getMovies();
    this.setState({ genres, movies });
  }

  handleGenreSelect = (genreId) => {
    const genreSelected = genreId;
    this.setState({ genreSelected: genreSelected });
  };

  render() {
    console.log("Selected Genre id  ::: ", this.state.genreSelected);
    const filteredMovies = this.state.genreSelected
      ? this.state.movies.filter(
          (movie) => movie.genre === this.state.genreSelected
        )
      : this.state.movies;
    console.log("Total number of movies are ::: ", filteredMovies.length);

    return (
      <Container fluid>
        <Row>
          <SearchBar />
        </Row>
        <Row>
          <Col className="col-2">
            <ListGroup
              items={this.state.genres}
              selectedItem={this.state.genreSelected}
              onItemSelect={this.handleGenreSelect}
            />
          </Col>
          <Col className="col-8">
            <MovieListing
              movies={filteredMovies}
              genreSelected={this.state.genreSelected}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LandingPage;
