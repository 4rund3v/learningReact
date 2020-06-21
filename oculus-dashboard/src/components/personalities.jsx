import React, { Component } from "react";

class PersonalityLandingPage extends Component {
  state = {};

  gennerateTableHeaders() {
    return (
      <thead>
        <tr>
          <th>#</th>
          <th>Preview</th>
          <th>Personality Name</th>
          <th>Training Image</th>
          <th>Recognitions</th>
        </tr>
      </thead>
    );
  }

  gennerateTableBody() {
    return (
      <tbody>
        <tr>
          <td>1,001</td>
          <td>
            <img src="https://www.placecage.com/30/30"></img>
          </td>
          <td>Nicolas Cage</td>
          <td>20</td>
          <td>1590</td>
        </tr>
      </tbody>
    );
  }

  render() {
    return (
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <h2>Personalities</h2>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            {this.gennerateTableHeaders()}
            {this.gennerateTableBody()}
          </table>
        </div>
      </main>
    );
  }
}

export default PersonalityLandingPage;
