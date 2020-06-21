import React, { Component } from "react";
import _ from "lodash";
// TableHeader Class

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = (column) => {
    const { sortColumn } = this.props;

    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };

  render() {
    return (
      <thead className="thead-dark">
        <tr>
          {this.props.columns.map((column) => (
            <th
              className="clickable text-center"
              key={column}
              onClick={() => this.raiseSort(column)}
            >
              {column}
              {/* {this.renderSortIcon(column)} */}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

class TableBody extends Component {
  renderCell = (item, column) => {
    // console.log("Item recieved is : ", item);
    // console.log("Column recieved is : ", column);
    if (column.content) return column.content(item);

    return _.get(item, column);
  };

  createKey = (item, column) => {
    return item._id + column;
  };

  render() {
    const { data, columns, columnMap, onSelectItem } = this.props;
    console.log("Recieved data : ,", data);
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td
                key={this.createKey(item, column)}
                onClick={() => onSelectItem(item._id)}
              >
                {this.renderCell(item, columnMap[column])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

class Table extends Component {
  render() {
    const { columns, columnMap, data } = this.props;
    const { onSelectItem } = this.props;
    console.log("[Table] Recieved data : ", columns, columnMap);
    return (
      <div className="table-responsive">
        <table className="table table-bordered table-hover ">
          <TableHeader columns={columns} />
          <TableBody
            data={data}
            columns={columns}
            columnMap={columnMap}
            onSelectItem={onSelectItem}
          />
        </table>
      </div>
    );
  }
}

export default Table;
