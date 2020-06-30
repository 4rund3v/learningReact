import React, { Component } from "react";
import Main from "../components/Main/Main";
import Sidebar from "../components/Sidebar/Sidebar";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div>
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default Dashboard;
