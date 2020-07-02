import React, { Component } from "react";
import ListPersonalities from "./components/ListPersonalities";
// import { personalityData } from "./services/personalities";
import { getAll } from "./utils/ContactsApi";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { personalityData: [] };
  }
  componentDidMount() {
    console.log("Component Mounted ---> started fetch of personalities");
    getAll().then((personalities) => {
      this.setState({ personalityData: personalities });
    });
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
