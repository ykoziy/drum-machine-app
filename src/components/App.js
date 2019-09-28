import React, { Component } from "react";
import "../assets/stylesheets/App.css";

import Header from "../containers/Header.js";

class App extends Component {
  render() {
    return (
      <div className="drum-container">
        <Header/>
      </div>
    );
  }
}

export default App;
