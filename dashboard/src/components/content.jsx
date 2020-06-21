import React, { Component } from "react";
import Personalities from "./personalities";

class Content extends Component {
  state = {
    element: "",
  };

  displayElementContent() {
    // function to handle displaying the relavent element's data that are fetched from the server
    // usually if this element is of type list then just list the items in a table container
    return <Personalities />;
  }

  render() {
    return (
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
        {this.displayElementContent()}
      </main>
    );
  }
}

export default Content;
