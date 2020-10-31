import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Counter from "./counter";

const Counters = (props) => {
  console.log("Rendering Products Data");
  const { onIncrement, onDelete, onReset, products } = props;
  return (
    <div>
      <Button variant="primary" onClick={() => onReset()}>
        Reset
      </Button>{" "}
      <ul>
        {products.map((prod) => (
          <li key={prod.id}>
            {" "}
            <Counter
              key={prod.id}
              prod={prod}
              onIncrement={onIncrement}
              onDelete={onDelete}
            />{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Counters;
