import React, { Component } from "react";
import SideBar from "./components/sidebar";
import FocusBar from "./components/foucsbar";
import Content from "./components/content";

class App extends Component {
  state = {
    activeElement: null,
    sideBarElements: [
      { _id: "models", path: "models", name: "Models" },
      { _id: "recognitions", path: "recognitions", name: "Recognitions" },
      { _id: "personalities", path: "personalities", name: "Personalities" },
      { _id: "tasks", path: "tasks", name: "Tasks" },
      { _id: "stats", path: "stats", name: "Stats" },
      { _id: "settings", path: "settings", name: "Settings" },
    ],
  };

  handleElementSelect = (elementId) => {
    console.log(
      "[handleElementSelect] Changing the selection to : ",
      elementId
    );
    this.setState({ activeElement: elementId });
  };

  render() {
    return (
      <React.Fragment>
        <FocusBar />
        <div className="container-fluid">
          <div className="row">
            <SideBar
              onSelectElement={this.handleElementSelect}
              activeElement={this.state.activeElement}
              elements={this.state.sideBarElements}
            />
            <Content />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
