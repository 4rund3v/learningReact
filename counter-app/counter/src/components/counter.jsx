import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
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
  const { onIncrement, onDecrement, onDelete } = props;
  return (
    <React.Fragment>
      <Col className="col-1">
        <span>
          {name}
          <img src={prodImage} alt="ProductImage" />
        </span>
      </Col>
      <Col>
        <span style={styles} className={getBadgeClasses(value)}>
          {value}
        </span>
        <Button variant="primary" onClick={() => onIncrement(id)}>
          +
        </Button>{" "}
        <Button
          variant="primary"
          onClick={() => onDecrement(id)}
          disabled={value === 0 ? "disabled" : ""}
        >
          -
        </Button>{" "}
        <Button variant="danger" onClick={() => onDelete(id)}>
          Delete
        </Button>{" "}
      </Col>
    </React.Fragment>
  );
};

export default Counter;
