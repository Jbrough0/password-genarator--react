import React, { Component } from "react";
import "./App.css";
import PasswordGenerator from "./components/Password Generator";

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
