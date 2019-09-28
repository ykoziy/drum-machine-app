import React, { Component } from "react";
import "../assets/stylesheets/App.css";

import Header from "../containers/Header.js";
import DrumMachine from "./DrumMachine.js";
import ControlPanel from "./ControlPanel.js"

class App extends Component {
  render() {
    return (
      <div className="drum-container">
        <Header/>
        <DrumMachine
            left={
                <div className="button-panel">
                Buttons
                </div>
            }
            right={
                <ControlPanel>
                Right
                </ControlPanel>
            }
        />
      </div>
    );
  }
}

export default App;
