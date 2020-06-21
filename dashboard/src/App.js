import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Content from "./components/content";

import NotFound from "./components/notFound";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <Switch>
            <Route
              path="/login"
              render={() => <Content selectedItem="login" />}
            ></Route>

            <Route
              path="/models"
              render={() => <Content selectedItem="models" />}
            ></Route>
            <Route
              path="/models/:id"
              render={() => <Content selectedItem="modelDetail" />}
            ></Route>

            <Route
              path="/personalities"
              render={() => <Content selectedItem="personalities" />}
            ></Route>
            <Route
              path="/personalities/:id"
              render={() => <Content selectedItem="personalityDetail" />}
            ></Route>

            <Route
              path="/recognitions"
              render={() => <Content selectedItem="recognitions" />}
            ></Route>

            <Route
              path="/settings"
              render={() => <Content selectedItem="settings" />}
            ></Route>
            <Route
              path="/stats"
              render={() => <Content selectedItem="stats" />}
            ></Route>
            <Route
              path="/tasks"
              render={() => <Content selectedItem="tasks" />}
            ></Route>

            <Route path="/not-found" component={NotFound}></Route>

            <Redirect from="/" exact to="/stats" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
