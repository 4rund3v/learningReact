import React, { Component } from "react";
import { Row, Table } from "react-bootstrap";
import { getGenreNameById } from "../../services/genreService";
import Like from "./like";

const CustomTable = (props) => {
  const { movies, onLike, onDelete, onSort } = props;
  const tableHeader = (
    <thead>
      <tr>
        <th>#</th>
        <th onClick={() => onSort("name")}>Movie Title</th>
        <th onClick={() => onSort("language")}>Language</th>
        <th onClick={() => onSort("genre")}>Genre</th>
        <th onClick={() => onSort("year")}>Year</th>
        <th onClick={() => onSort("liked")}>Liked</th>
        <th></th>
      </tr>
    </thead>
  );

  const tableBody = (
    <tbody>
      {movies.map((movie, index) => {
        const elem = (
          <tr key={movie._id} className="flex">
            <td>{index + 1}</td>
            <td>{movie.name}</td>
            <td>{movie.language}</td>
            <td>{getGenreNameById(movie.genre)}</td>
            <td>{movie.year}</td>
            <td>
              <Like liked={movie.liked} onClick={() => onLike(movie._id)} />
            </td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(movie._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
        return elem;
      })}
    </tbody>
  );

  const movieTable = (
    <Table responsive="md" striped bordered hover variant="light">
      {tableHeader}
      {tableBody}
    </Table>
  );
  return movieTable;
};

export default CustomTable;
