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
  console.log("Counter ", props);
  const id = props.prod.id;
  const value = props.prod.value;
  const name = props.prod.name;
  return (
    <React.Fragment>
      {name}
      <span style={styles} className={getBadgeClasses(value)}>
        {value}
      </span>
      <Button variant="primary" onClick={() => props.onIncrement(id)}>
        Increment
      </Button>{" "}
      <Button variant="danger" onClick={() => props.onDelete(id)}>
        Delete
      </Button>{" "}
    </React.Fragment>
  );
};

export default Counter;
