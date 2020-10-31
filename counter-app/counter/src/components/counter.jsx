import React, { Component } from "react";
import { Button } from "react-bootstrap";

const getBadgeClasses = (value) => {
  let spanClasses = "badge m-2 badge-";
  spanClasses += value <= 0 ? "secondary" : "primary";
  return spanClasses;
};

const styles = {
  fontSize: 20,
};

const Counter = (props) => {
  console.log("[Counter] ", props.prod);
  const { id, name, value, prodImage } = props.prod;
  const { onIncrement, onDelete } = props;
  return (
    <React.Fragment>
      {name}
      <span style={styles} className={getBadgeClasses(value)}>
        {value}
      </span>
      <img src={prodImage} alt="ProductImage" />
      <Button variant="primary" onClick={() => onIncrement(id)}>
        Increment
      </Button>{" "}
      <Button variant="danger" onClick={() => onDelete(id)}>
        Delete
      </Button>{" "}
    </React.Fragment>
  );
};

export default Counter;
