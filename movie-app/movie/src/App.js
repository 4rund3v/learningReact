import React, { Component } from "react";
import MoviePage from "./components/movie/MoviePage";
import NavBar from "./components/navBar";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <MoviePage />
      </div>
    );
  }
}

export default App;
