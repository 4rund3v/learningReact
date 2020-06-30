import React, { Component } from "react";
import Dashboard from "./containers/dashboard";

// styles
import { ThemeProvider } from "styled-components";
import { GloablStyles } from "./styles/global";
import { lightTheme, darkTheme } from "./styles/theme";

class App extends Component {
  state = {};
  render() {
    return (
      <ThemeProvider theme={lightTheme}>
        <GloablStyles />
        <Dashboard />
      </ThemeProvider>
    );
  }
}

export default App;
