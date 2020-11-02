import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MoviePage from "./components/pages/MoviePage";
import ShowsPage from "./components/pages/ShowPage";
import MusicPage from "./components/pages/MusicPage";
import MissingPage from "./components/pages/MissingPage";
import NavBar from "./components/navBar";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/movies" component={MoviePage} />
            <Route
              path="/shows/:id"
              render={(props) => <ShowsPage sortBy="latest" {...props} />}
            />
            <Route path="/shows" component={ShowsPage} />
            <Route path="/music/:id" component={MusicPage} />
            <Redirect from="/latest" to="/movies" />
            <Route path="/music" component={MusicPage} />
            <Route path="/404" exact component={MissingPage} />
            <Route path="/" exact component={MoviePage} />
            <Redirect to="/404" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
