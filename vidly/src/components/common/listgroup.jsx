import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const { genres, selectedGenre } = this.props;
    let gclass = "list-group-item";
    return (
      <div>
        <ul className="list-group">
          {genres.map((genre) => {
            console.log(genre);

            let row = (
              <li
                key={genre._id}
                className={
                  genre._id === selectedGenre
                    ? "list-group-item active"
                    : "list-group-item"
                }
                onClick={() => this.props.onGenreSelect(genre._id)}
              >
                {" "}
                {genre.name}
              </li>
            );
            return row;
          })}
        </ul>
      </div>
    );
  }
}

export default ListGroup;
