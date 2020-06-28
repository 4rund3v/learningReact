import React, { Component } from "react";
import SideBar from "./common/sidebar";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./dashboard";
import Clients from "./clients";
import Tasks from "./tasks";
import Settings from "./settings";
import Login from "./login";
import Models from "./models";

class Content extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper">
        <SideBar />
        <div className="content" id="content">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/tasks" component={Tasks} />
            <Route path="/clients" component={Clients} />
            <Route path="/models" component={Models} />
            <Route path="/settings" component={Settings} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Content;
