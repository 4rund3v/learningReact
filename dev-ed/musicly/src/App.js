import React from "react";
import "./styles/app.scss";

import Song from "./components/Song";
import Player from "./components/Player";

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
