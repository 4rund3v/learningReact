import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MoviePage from "./components/pages/MoviePage";
import ShowsPage from "./components/pages/ShowPage";
import MusicPage from "./components/pages/MusicPage";
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
            <Route path="/shows" component={ShowsPage} />
            <Route path="/music" component={MusicPage} />
            <Route path="/" component={MoviePage} />
            {/* <Route
              path="/shows/:id"
              render={(props) => <ShowsPage sortBy="latest" {...props} />}
            />
                        <Route path="/music/:id" component={MusicPage} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
