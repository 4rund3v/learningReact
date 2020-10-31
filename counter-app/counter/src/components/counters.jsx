import React, { Component } from "react";
import { Button, Row, Container } from "react-bootstrap";
import Counter from "./counter";

const Counters = (props) => {
  console.log("Rendering Products Data");
  const { onIncrement, onDecrement, onDelete, onReset, products } = props;
  return (
    <div>
      <Button variant="primary" onClick={() => onReset()}>
        Reset
      </Button>{" "}
      <ul>
        {products.map((prod) => (
          <li key={prod.id}>
            <div className="row no-gutters">
              {" "}
              <Counter
                key={prod.id}
                prod={prod}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onDelete={onDelete}
              />{" "}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Counters;
