import React, { Component } from "react";

// component imports
import TopNavBar from "./components/topnavbar";
import Sidebar from "./components/sidebar";
import PersonalityLandingPage from "./components/personalities";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TopNavBar />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <PersonalityLandingPage />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default App;
