import React, { Component } from "react";

// Input :
//Output :
function pageRange(start, end) {
  // console.log("Page starts from : ", start);
  // console.log("Page ends at : ", end);
  var arr = [],
    c = end - start + 1;
  while (c--) {
    arr[c] = end--;
  }
  return arr;
}

class Pagnination extends Component {
  // propTypes() {
  //   // itemsCount: this.propTypes.num
  // }
  render() {
    const { itemsCount, entriesPerPage, currentPage } = this.props;
    const { onPageChange } = this.props;
    // console.log("total items are: ", itemsCount);
    // console.log("total items per page are: ", entriesPerPage);
    const totalPages = itemsCount / entriesPerPage;
    const pages = pageRange(1, Math.ceil(totalPages));
    //  console.log("Page numbers are : ", pages);
    return (
      <nav aria-label="Page navigation">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagnination;
