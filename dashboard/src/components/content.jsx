import React, { Component } from "react";
import SideBar from "./sidebar";
import FocusBar from "./foucsbar";

import Models from "./models";
import Personalities from "./personalities";
import PersonalityDetail from "./personalityDetail";
import ModelDetail from "./modelDetails";
import Recognitions from "./recognitions";
import Settings from "./settings";
import Stats from "./stats";
import Tasks from "./tasks";

class Content extends Component {
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
    element: "",
  };

  handleElementSelect = (elementId) => {
    console.log(
      "[handleElementSelect] Changing the selection to : ",
      elementId
    );
    // this.setState({ activeElement: elementId });
  };

  displayElementContent() {
    // function to handle displaying the relavent element's data that are fetched from the server
    // usually if this element is of type list then just list the items in a table container
    const { selectedItem } = this.props;
    let mainContent = <h1> </h1>;
    if (selectedItem === "personalities") {
      mainContent = <Personalities />;
    } else if (selectedItem === "personalityDetail") {
      mainContent = <PersonalityDetail />;
    } else if (selectedItem === "models") {
      mainContent = <Models />;
    } else if (selectedItem === "modelDetail") {
      mainContent = <ModelDetail />;
    } else if (selectedItem === "tasks") {
      mainContent = <Tasks />;
    } else if (selectedItem === "stats") {
      mainContent = <Stats />;
    } else if (selectedItem === "settings") {
      mainContent = <Settings />;
    } else if (selectedItem === "recognitions") {
      mainContent = <Recognitions />;
    }

    return (
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
        <FocusBar />
        {mainContent}
      </main>
    );
  }

  render() {
    console.log("Content: ", this.props);
    return (
      <div className="row">
        <SideBar
          // onSelectElement={this.handleElementSelect}
          // activeElement={this.state.activeElement}
          elements={this.state.sideBarElements}
        />
        {this.displayElementContent()}
      </div>
    );
  }
}

export default Content;
