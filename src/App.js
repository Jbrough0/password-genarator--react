import React, { Component } from "react";
import "./App.css";
import passwordgenerator from "./components/passwordgenerator";

class App extends Component {
  render() {
    return (
      <div className="App">
        <passwordgenerator />
      </div>
    );
  }
}

export default App;
