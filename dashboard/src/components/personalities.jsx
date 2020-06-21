import React, { Component } from "react";
import Table from "./common/table";
import Pagination from "./common/paginate";
import { getPersonalities } from "../services/personalities";
import { Link } from "react-router-dom";
// class Personality extends Component {
//   state = {};
// }

function prepareColumnMap() {
  let columnMap = {};
  columnMap["Personality"] = "name";
  columnMap["Training Count"] = "total_elements";
  columnMap["Thumbnail"] = "index_image";
  columnMap["Created Time"] = "created_time";
  columnMap["Updated Time"] = "updated_time";
  return columnMap;
}

function getColumns() {
  return ["Personality", "Training Count", "Created Time", "Updated Time"];
}

class Personalities extends Component {
  state = {
    personalityData: getPersonalities(),
    columnMap: prepareColumnMap(),
    currentPage: 1,
    totalPages: 1,
    totalPersonalities: 1,
    sortBy: {},
    columns: getColumns(),
  };

  componentDidMount() {
    // this.setState({
    //   personalityData: getPersonalities(),
    //   columnMap: prepareColumnMap(),
    //   columns: getColumns(),
    // });

    this.setState({
      totalPages: this.state.personalityData.page_count,
      totalPersonalities: this.state.personalityData.total,
    });
    console.log("componentDidMount state: ", this.state);
  }

  // methods
  handlePageChange = (pageNum) => {
    console.log("[handlePageChange] Page change requested :", pageNum);
  };

  handleSortColumn = (columnKey) => {
    console.log("[handleSortColumn] Column to change to is :", columnKey);
  };

  handleSelectPersonality = (itemId) => {
    console.log("[handleSelectPersonality] Item selected is :", itemId);
    return <Link to={`/personalities/${itemId}`}></Link>;
  };

  // render
  render() {
    return (
      <div>
        <Table
          columns={this.state.columns}
          columnMap={this.state.columnMap}
          data={this.state.personalityData.personalities}
          hyperlinkColumn={{ column: "Personality", path: "/personalities" }}
          currentPage={this.state.currentPage}
          onPageChange={this.handlePageChange}
          onSortColumn={this.handleSortColumn}
        />
        <div className="d-flex flex-row-reverse">
          <Pagination
            itemsCount={this.state.totalPersonalities}
            pageSize={25}
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange}
          />
          <div className="p-2">
            {" "}
            {"Showing "}
            {this.state.currentPage * 25}
            {" - "}
            {this.state.totalPersonalities} {"items. "}
          </div>
        </div>
      </div>
    );
  }
}
export default Personalities;
