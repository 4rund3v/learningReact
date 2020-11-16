import React, { useState } from "react";

function App() {
  const [name, setName] = useState("arun");
  const updateNameHandler = () => {
    console.log("Button clicked, name will be changed");
    setName("arun dev");
  };
  return (
    <div className="App">
      <h3>Hi there : {name} </h3>
      <button onClick={updateNameHandler}>Click me!</button>
    </div>
  );
}

export default App;
