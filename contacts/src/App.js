import React, { Component } from "react";
import ListPersonalities from "./components/ListPersonalities";
import { personalityData } from "./services/personalities";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { personalityData };
  }
  render() {
    return (
      <div>
        <ListPersonalities personalities={this.state.personalityData} />
      </div>
    );
  }
}

export default App;
