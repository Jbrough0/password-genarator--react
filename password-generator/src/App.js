import React, { Component } from "react";
import "./App.scss";
import PasswordGenerator from "./src";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PasswordGenerator />
      </div>
    );
  }
}

export default App;
